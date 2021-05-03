/* eslint-disable @typescript-eslint/no-explicit-any */

import Axios from 'axios';

import Logger from '../services/logger';
import { RequestResponse } from './types';

export function structureAPIResponse(res: any, apiCallId = ''): RequestResponse {
  let returnData: RequestResponse;
  if (res.status === 200) {
    Logger.info(`SUCCESS_API_REQUEST: ${apiCallId}`, res.data);
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
    const res = await Axios.post(url, requestData);
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
    const res = await Axios.get(url, {
      params: requestData,
    });
    // TODO can pass in adapters as well if needed.
    return structureAPIResponse(res, apiCallId);
  } catch (err) {
    errorResponseAsPerStatusCode(err, errorHandlers);
    return structureAPIError({ err, errorResponse: err.response, apiCallId, requestData });
  }
}
