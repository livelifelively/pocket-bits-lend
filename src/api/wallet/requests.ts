import { WalletAPIConfigurations } from './configurations';
import { postRequestHandler, getRequestHandler } from '../http';
import { A_WalletsCoinsValue } from './adapter';

// export const signupPost = async (requestData: SignUpRequest) => {
//   const returnValue = await postRequestHandler(requestData, WalletAPIConfigurations['SIGNUP']);
//   return returnValue;
// };

export const walletBalanceForCoinGet = (requestData: WalletBalanceForCoinRequest) => {
  return getRequestHandler(requestData, WalletAPIConfigurations['RESEND_EMAIL_OTP']);
};

export const coinTickerGet = async (requestData: any) => {
  const returnValue = await getRequestHandler(requestData, WalletAPIConfigurations['COIN_TICKER']);
  return returnValue;
};

export const walletsAllGet = async (requestData: WalletsBalanceRequest) => {
  const wallets = await getRequestHandler(requestData, WalletAPIConfigurations['WALLET_ALL']);
  const coins = await coinTickerGet({});
  return A_WalletsCoinsValue(wallets.data, coins.data);
};

export const walletAddressGet = async (requestData: WalletsAddressRequest) => {
  const walletAddress = await getRequestHandler(requestData, WalletAPIConfigurations['WALLET_ADDRESS']);
  return walletAddress.data;
};
