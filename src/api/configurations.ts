/* eslint-disable @typescript-eslint/no-explicit-any */

import { API } from '../constants/api';

const URLPrefixes = {
  AUTH: `${API.baseURL}${API.apiPrefix}`,
};

export const AuthAPIConfigurations = {
  SIGNUP: {
    url: URLPrefixes.AUTH + '/register',
    apiCallId: 'SIGNUP',
    method: 'POST',
    errorHandlers: {
      '409': (response: any) => {
        console.log('HANDLE 409 ERROR', response);
      },
      default: (response: any) => {
        console.log('HANDLE GENERIC ERROR', response);
      },
    },
  },
  SIGNIN_OTP: {
    url: URLPrefixes.AUTH + '/loginOtp',
    apiCallId: 'SIGNIN_OTP',
    method: 'POST',
    errorHandlers: {
      default: (response: any) => {
        console.log('HANDLE GENERIC ERROR', response);
      },
    },
  },
  SIGNIN: {
    url: URLPrefixes.AUTH + '/authenticate',
    apiCallId: 'SIGNIN',
    method: 'POST',
    errorHandlers: {
      default: (response: any) => {
        console.log('HANDLE GENERIC ERROR', response);
      },
    },
  },
  EMAIL_VERIFICATION: {
    url: URLPrefixes.AUTH + '/verifyEmail',
    apiCallId: 'EMAIL_VERIFICATION',
    method: 'POST',
    errorHandlers: {
      default: (response: any) => {
        console.log('HANDLE GENERIC ERROR', response);
      },
    },
  },
  '2FA_VERIFICATION': {
    url: URLPrefixes.AUTH + '/verifyEmail',
    apiCallId: 'EMAIL_VERIFICATION',
    method: 'POST',
    errorHandlers: {
      default: (response: any) => {
        console.log('HANDLE GENERIC ERROR', response);
      },
    },
  },
  RESEND_EMAIL_OTP: {
    url: URLPrefixes.AUTH + '/resendOtpEmail',
    apiCallId: 'RESEND_EMAIL_OTP',
    method: 'GET',
    errorHandlers: {
      default: (response: any) => {
        console.log('HANDLE GENERIC ERROR', response);
      },
    },
  },
};
