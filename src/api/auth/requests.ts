import { AuthAPIConfigurations } from './configurations';
import { postRequestHandler, getRequestHandler } from '../http';
import axios from 'axios';
import Logger from '../../services/logger';

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

/**
 * Get new token from refresh token and id token, if fails, logout user
 * @param requestData refreshToken, idToken
 * @returns refreshToken
 */
export const refreshTokenPost = async (requestData: RefreshTokenRequest) => {
  const { url } = AuthAPIConfigurations['REFRESH_TOKEN'];
  try {
    const data = await axios.post(url(), AuthAPIConfigurations['REFRESH_TOKEN'], {
      headers: {
        'Refresh-Token': requestData.refreshToken,
        'Id-Token': requestData.token,
      },
    });
    return data;
  } catch (e) {
    Logger.error('AUTH__REFRESH_TOKEN', e);
    throw e;
  }
};
