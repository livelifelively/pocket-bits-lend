import { VaultAPIConfigurations } from './configurations';
import { A_VaultActiveDeposits } from './adapter';

export const vaultsAllGet = async (requestData: any, apiRequestHandler) => {
  try {
    const vaults = await apiRequestHandler(requestData, VaultAPIConfigurations['VAULTS_ALL']);
    return A_VaultActiveDeposits(vaults.data);
  } catch (e) {
    // handle errors w.r.t. data value. API success, but data not suitable.
    console.log(e);
  }
};
