import { VaultAPIConfigurations } from './configurations';
import { A_VaultActiveDeposits, A_VaultOptions } from './adapter';
import { apiRequestHandler } from '../../services/http';

export const vaultsAllGet = async (requestData: any) => {
  const vaults = await apiRequestHandler(requestData, VaultAPIConfigurations['VAULTS_ALL']);
  return A_VaultActiveDeposits(vaults?.data);
};

export const vaultsInterestRates = async (requestData: any) => {
  const vaults = await apiRequestHandler(requestData, VaultAPIConfigurations['VAULT_RATES']);
  return A_VaultOptions(vaults?.data, requestData.coinId);
};

export const createVault = async (requestData: any) => {
  const returnVal = await apiRequestHandler(requestData, VaultAPIConfigurations['CREATE_VAULT']);
  return returnVal;
};

export const deleteVault = async (requestData: any) => {
  const returnVal = await apiRequestHandler(requestData, VaultAPIConfigurations['DELETE_VAULT']);
  return returnVal;
};
