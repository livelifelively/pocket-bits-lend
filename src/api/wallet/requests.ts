import { WalletAPIConfigurations } from './configurations';
import { A_WalletsCoinsValue } from './adapter';
import { apiRequestHandler } from '../../services/http';

export const walletBalanceForCoinGet = async (requestData: WalletBalanceForCoinRequest, apiRequestHandler) => {
  const returnValue = await apiRequestHandler(requestData, WalletAPIConfigurations['WALLET_COIN']);
  return returnValue.data[0];
};

export const coinTickerGet = async (requestData: any, apiRequestHandler) => {
  const returnValue = await apiRequestHandler(requestData, WalletAPIConfigurations['COIN_TICKER']);
  return returnValue.data;
};

export const walletsAllGet = async (requestData: WalletsBalanceRequest) => {
  const wallets = await apiRequestHandler(requestData, WalletAPIConfigurations['WALLET_ALL']);
  const coins = await coinTickerGet({}, apiRequestHandler);
  return A_WalletsCoinsValue(wallets?.data, coins.data);
};

export const walletAddressGet = async (requestData: WalletsAddressRequest) => {
  const walletAddress = await apiRequestHandler(requestData, WalletAPIConfigurations['WALLET_ADDRESS']);
  return walletAddress?.data;
};
