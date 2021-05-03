/* eslint-disable @typescript-eslint/no-explicit-any */

import { AuthAPIConfigurations } from './configurations';
import { postRequestHandler, getRequestHandler } from './http';

import {
  SignUpRequest,
  SignInRequest,
  SignInOTPRequest,
  TwoFactorAuthenticationRequest,
  VerifyEmailRequest,
  ResendEmailOTPRequest,
} from './types';

export const signupPost = async (requestData: SignUpRequest) => {
  const returnValue = await postRequestHandler(requestData, AuthAPIConfigurations['SIGNUP']);
  return returnValue;
};

export const signinOTPPost = async (requestData: SignInOTPRequest) => {
  const returnValue = await postRequestHandler(requestData, AuthAPIConfigurations['SIGNIN_OTP']);
  return returnValue;
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

export const resendOTPEmailGet = (requestData: ResendEmailOTPRequest) => {
  return getRequestHandler(requestData, AuthAPIConfigurations['RESEND_EMAIL_OTP']);
};
