import Axios from 'axios';

import { API } from '../constants/api';
import Logger from '../services/logger';
import { AuthAPIConfigurations, SignUpRequest, SignInRequest, TwoFactorAuthenticationRequest, VerifyEmailRequest } from './configurations';

const apiUrl = `${API.baseURL}${API.apiPrefix}`; 

export type RequestResponse = {
  status: 'SUCCESS' | 'FAILED',
  data: any,
  request?: any,
  error: any
}

export function structureAPIResponse (res: any, apiCallId='') {
  let returnData: RequestResponse;
  if (res.status === 200) {
    Logger.info(`SUCCESS_API_REQUEST: ${apiCallId}`, res.data);
    returnData = {
      status: 'SUCCESS',
      data: {
        data: res.data
      },
      error: {
        message: ''
      }
    };
    return returnData;
  }

  returnData = {
    status: 'FAILED',
    data: {
      data: res.data
    },
    error: {
      message: 'Request Failed'
    }
  };
  Logger.error(`FAILED_API_REQUEST: ${apiCallId}_THEN`, returnData);
  // Silent failure. #TODO can throw error.
  return returnData;
}

export function structureAPIError ({err, apiCallId, requestData, errorResponse}: {err:any, apiCallId:string, requestData:any, errorResponse: any}) {
  let returnData: RequestResponse;

  returnData = {
    status: 'FAILED',
    // TODO handle whether to send password to log or not.
    request: requestData,
    error: {
      // err,
      errorResponse
    },
    data: {}
  };
  
  Logger.error(`FAILED_API_REQUEST: ${apiCallId}_CATCH`, returnData);
  return returnData;
}

export function errorResponseAsPerStatusCode (err: any, errorHandlers: any) {
  if (err.response?.status) {
    if (errorHandlers[err.response?.status]) errorHandlers[err.response?.status](err.response);
    else errorHandlers['default'](err.response);
  }
}

export async function postRequestHandler (requestData: any, requestConfigurations: any) {
  const {apiCallId, url, errorHandlers} = requestConfigurations;
  
  try {
    const res = await Axios.post(url, requestData);
    // TODO can pass in adapters as well if needed.
    return structureAPIResponse(res, apiCallId);
  } catch(err) {
    errorResponseAsPerStatusCode(err, errorHandlers);
    return structureAPIError({err, errorResponse: err.response, apiCallId, requestData});
  }
}

export const signupPost = async (requestData: SignUpRequest) => {
  return postRequestHandler(requestData, AuthAPIConfigurations['SIGNUP']);
};

export const signinPost = (requestData: SignInRequest) => {
  return postRequestHandler(requestData, AuthAPIConfigurations['SIGNIN']);
};

export const verifyEmailPost = (requestData: VerifyEmailRequest) => {
  return postRequestHandler(requestData, AuthAPIConfigurations['EMAIL_VERIFICATION']);
};

export const twoFactorAuthenticationVefificationPost = (requestData: TwoFactorAuthenticationRequest) => {
  return postRequestHandler(requestData, AuthAPIConfigurations['2FA_VERIFICATION']);
};