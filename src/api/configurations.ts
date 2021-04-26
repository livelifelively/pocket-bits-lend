import { API } from "../constants/api";

const URLPrefixes = {
  'AUTH': `${API.baseURL}${API.apiPrefix}` 
}

export type SignUpRequest = {
  email: string,
  password: string,
  referralCode: string
}

export type SignInRequest = {
  email: string,
  password: string,
  verificationCode: string
}

export type VerifyEmailRequest = {
  otp: string,
  email: string
}

export type TwoFactorAuthenticationRequest = {
  verificationCode: string, 
  email: string
}

export const AuthAPIConfigurations = {
  'SIGNUP': {
    url: URLPrefixes.AUTH+'/register',
    apiCallId: 'SIGNUP',
    method: 'POST',
    errorHandlers: {
      '409': (response: any) => {
        console.log('HANDLE 409 ERROR', response)
      },
      'default': (response: any) => {console.log('HANDLE GENERIC ERROR', response)}
    }
  },
  'SIGNIN': {
    url: URLPrefixes.AUTH+'/authenticate',
    apiCallId: 'SIGNIN',
    method: 'POST',
    errorHandlers: {
      'default': (response: any) => {console.log('HANDLE GENERIC ERROR', response)}
    }
  },
  'EMAIL_VERIFICATION': {
    url: URLPrefixes.AUTH+'/verifyEmail',
    apiCallId: 'EMAIL_VERIFICATION',
    method: 'POST',
    errorHandlers: {
      'default': (response: any) => {console.log('HANDLE GENERIC ERROR', response)}
    }
  },
  '2FA_VERIFICATION': {
    url: URLPrefixes.AUTH+'/verifyEmail',
    apiCallId: 'EMAIL_VERIFICATION',
    method: 'POST',
    errorHandlers: {
      'default': (response: any) => {console.log('HANDLE GENERIC ERROR', response)}
    }
  }
}