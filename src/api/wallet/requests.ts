import { WalletAPIConfigurations } from './configurations';
import { postRequestHandler, getRequestHandler } from '../http';

// export const signupPost = async (requestData: SignUpRequest) => {
//   const returnValue = await postRequestHandler(requestData, WalletAPIConfigurations['SIGNUP']);
//   return returnValue;
// };

export const walletBalanceForCoinGet = (requestData: WalletBalanceForCoinRequest) => {
  return getRequestHandler(requestData, WalletAPIConfigurations['RESEND_EMAIL_OTP']);
};

export const walletsAllGet = (requestData: WalletsBalanceRequest) => {
  return getRequestHandler(requestData, WalletAPIConfigurations['WALLET_ALL']);
};
