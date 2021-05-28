import { WalletAPIConfigurations } from './configurations';
import { A_WalletsCoinsValue } from './adapter';

export const walletBalanceForCoinGet = (requestData: WalletBalanceForCoinRequest, apiRequestHandler) => {
  return apiRequestHandler(requestData, WalletAPIConfigurations['RESEND_EMAIL_OTP']);
};

export const coinTickerGet = async (requestData: any, apiRequestHandler) => {
  const returnValue = await apiRequestHandler(requestData, WalletAPIConfigurations['COIN_TICKER']);
  return returnValue;
};

export const walletsAllGet = async (requestData: WalletsBalanceRequest, apiRequestHandler) => {
  const wallets = await apiRequestHandler(requestData, WalletAPIConfigurations['WALLET_ALL']);
  const coins = await coinTickerGet({}, apiRequestHandler);
  return A_WalletsCoinsValue(wallets.data, coins.data);
};

export const walletAddressGet = async (requestData: WalletsAddressRequest, apiRequestHandler) => {
  const walletAddress = await apiRequestHandler(requestData, WalletAPIConfigurations['WALLET_ADDRESS']);
  return walletAddress.data;
};
