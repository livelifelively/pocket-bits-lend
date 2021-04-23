import Axios from "axios";

import { API } from "../constants/api";
import Logger from "../services/logger";

const apiUrl = `${API.baseURL}${API.apiPrefix}` 

export type RequestResponse = {
  status: 'SUCCESS' | 'FAILED',
  data: any,
  error: any
}

export const signupPost = ({email, password, referralCode}: {email: string, password: string, referralCode: string}) => {
  return Axios.post(apiUrl+'/register', {
    email,
    password,
    referralCode
  })
  .then((res) => {
    let returnData: RequestResponse;
    if (res.status === 200) {
      Logger.info('SUCCESS_API_REQUEST: SIGNUP', res.data)
      returnData = {
        status: 'SUCCESS',
        data: {
          data: res.data
        },
        error: {
          message: ''
        }
      }
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
    }
    return returnData;
  })
  .catch((err) => {
    Logger.error('FAILED_API_REQUEST: SIGNUP', err)
    let returnData: RequestResponse;
    returnData = {
      status: 'FAILED',
      data: {},
      error: err
    };
    return returnData;
  })
}