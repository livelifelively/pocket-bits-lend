/* eslint-disable @typescript-eslint/no-explicit-any */

import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import Logger from '../services/logger';
import { cloneDeep } from 'lodash';
import { authToken } from '../services/auth';
import { refreshTokenPost } from './auth/requests';

const http = Axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(
  async (config) => {
    const newConfig = cloneDeep(config);

    const user = await authToken();

    if (user.token) {
      newConfig.headers['Authorization'] = `Bearer ${user.token}`;
    }

    Logger.debug('HTTP_REQUEST_INTERCEPTOR--CONFIGS', newConfig);
    return newConfig;
  },
  (error) => {
    // TODO structure the error
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor - applicable on all responses via this service
 * Processes response just after its received.
 */
http.interceptors.response.use(
  (response) => {
    Logger.debug('HTTP_RESPONSE_INTERCEPTOR--TRY', '');
    return response;
  },
  async (error) => {
    Logger.debug('HTTP_RESPONSE_INTERCEPTOR--CATCH', '');
    // TODO: call central error display service here
    const userDataStringFromStorage = await AsyncStorage.getItem('user');
    let userDataObjectFromStorage;
    if (userDataStringFromStorage) userDataObjectFromStorage = JSON.parse(userDataStringFromStorage);
    if (error.response.status === 401) {
      // refresh id_token, else logout.
      try {
        // if there was a token before, fetch refresh token
        if (userDataObjectFromStorage.token) {
          const refreshTokenData = await refreshTokenPost({
            refreshToken: userDataObjectFromStorage.refreshToken,
            token: userDataObjectFromStorage.token,
          });

          if (refreshTokenData.data?.id_token) {
            await refreshUserToken(userDataObjectFromStorage, refreshTokenData.data);
          } else {
            await expireUserToken(userDataObjectFromStorage);
          }
        }
      } catch (e) {
        await expireUserToken(userDataObjectFromStorage);
      }
    } else {
      throw error;
    }
  }
);

async function expireUserToken(userDataObjectFromStorage: any) {
  userDataObjectFromStorage = { ...userDataObjectFromStorage, userAuthenticated: false, token: '' };
  await AsyncStorage.setItem('user', JSON.stringify(userDataObjectFromStorage));
}

async function refreshUserToken(userDataObjectFromStorage: any, refreshTokenData: any) {
  userDataObjectFromStorage = {
    ...userDataObjectFromStorage,
    token: refreshTokenData.id_token,
    refreshToken: refreshTokenData.refresh_token,
  };
  await AsyncStorage.setItem('user', JSON.stringify(userDataObjectFromStorage));
}

export function structureAPIResponse(res: any, apiCallId = ''): RequestResponse {
  let returnData: RequestResponse;
  if (res.status === 200) {
    Logger.debug(`SUCCESS_API_REQUEST: ${apiCallId}`, res.data);
    returnData = {
      status: 'SUCCESS',
      data: res.data,
      error: {
        message: '',
      },
    };
    return returnData;
  }

  returnData = {
    status: 'FAILED',
    data: res.data,
    error: {
      message: 'Request Failed',
    },
  };
  Logger.error(`FAILED_API_REQUEST: ${apiCallId}_THEN`, returnData);
  // Silent failure. #TODO can throw error.
  return returnData;
}

export function structureAPIError({
  err,
  requestConfigurations,
  requestData,
}: {
  err: any;
  requestData: any;
  requestConfigurations: any;
}) {
  const error = err.response?.data
    ? {
        ...err.response?.data,
        requestData,
        requestConfigurations,
      }
    : {
        details: 'API Error',
        status: 500,
        message: 'error.http.500',
        title: 'Internal Server Error',
        requestData,
        requestConfigurations,
      };
  Logger.error(`${error.message}`, error);
  return error;
}

export function errorResponseAsPerStatusCode(err: any, errorHandlers: any): void {
  if (err.response?.status) {
    if (errorHandlers[err.response.status]) errorHandlers[err.response.status](err.response);
    else errorHandlers['default'](err.response);
  }
}

export async function postRequestHandler(requestData: any, requestConfigurations: any, headerData = {}) {
  const { apiCallId, url, errorHandlers } = requestConfigurations;
  const headers = { ...headerData };

  try {
    const res = await http.post(url(), requestData, { headers });
    // TODO can pass in adapters as well if needed.
    return structureAPIResponse(res, apiCallId);
  } catch (err) {
    errorResponseAsPerStatusCode(err, errorHandlers);
    const structuredError = structureAPIError({ err, requestData, requestConfigurations });
    throw structuredError;
  }
}

export async function getRequestHandler(requestData: any, requestConfigurations: any) {
  const { apiCallId, url, errorHandlers } = requestConfigurations;
  const requestURL = url(requestData);

  try {
    const res = await http.get(requestURL);
    // TODO can pass in adapters as well if needed.
    return structureAPIResponse(res, apiCallId);
  } catch (err) {
    errorResponseAsPerStatusCode(err, errorHandlers);
    const structuredError = structureAPIError({ err, requestData, requestConfigurations });
    throw structuredError;
  }
}
