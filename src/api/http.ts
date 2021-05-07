/* eslint-disable @typescript-eslint/no-explicit-any */

import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import Logger from '../services/logger';
import { cloneDeep } from 'lodash';
import { authToken } from '../services/auth';

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
      // application wide error.
      // redirect to login/email or login/password, based on the situation
      console.log(userDataObjectFromStorage);
      userDataObjectFromStorage = { ...userDataObjectFromStorage, userAuthenticated: false, token: '' };
      await AsyncStorage.setItem('user', JSON.stringify(userDataObjectFromStorage));
    }
    throw error;
  }
);

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
  apiCallId,
  requestData,
  errorResponse,
}: {
  err: any;
  apiCallId: string;
  requestData: any;
  errorResponse: any;
}): RequestResponse {
  const returnData: RequestResponse = {
    status: 'FAILED',
    // TODO handle whether to send password to log or not.
    request: requestData,
    error: {
      // err,
      errorResponse,
    },
    data: {},
  };

  Logger.error(`FAILED_API_REQUEST: ${apiCallId}_CATCH`, returnData);
  return returnData;
}

export function errorResponseAsPerStatusCode(err: any, errorHandlers: any): void {
  if (err.response?.status) {
    if (errorHandlers[err.response?.status]) errorHandlers[err.response?.status](err.response);
    else errorHandlers['default'](err.response);
  }
}

export async function postRequestHandler(requestData: any, requestConfigurations: any) {
  const { apiCallId, url, errorHandlers } = requestConfigurations;

  try {
    const res = await http.post(url(), requestData);
    // TODO can pass in adapters as well if needed.
    return structureAPIResponse(res, apiCallId);
  } catch (err) {
    errorResponseAsPerStatusCode(err, errorHandlers);
    return structureAPIError({ err, errorResponse: err.response, apiCallId, requestData });
  }
}

export async function getRequestHandler(requestData: any, requestConfigurations: any) {
  const { apiCallId, url, errorHandlers } = requestConfigurations;

  try {
    const res = await http.get(url());
    // TODO can pass in adapters as well if needed.
    return structureAPIResponse(res, apiCallId);
  } catch (err) {
    errorResponseAsPerStatusCode(err, errorHandlers);
    return structureAPIError({ err, errorResponse: err.response, apiCallId, requestData });
  }
}
