/* eslint-disable @typescript-eslint/no-explicit-any */

import { API } from '../../constants/api';

const URLPrefixes = {
  AUTH: `${API.baseURL}${API.apiPrefix}`,
};

export const VaultAPIConfigurations = {
  VAULTS_ALL: {
    url: (requestData = {}) => URLPrefixes.AUTH + '/v1' + '/allVaults',
    apiCallId: 'VAULTS_ALL',
    method: 'GET',
    errorHandlers: {
      '409': (response: any) => {
        console.log('HANDLE 409 ERROR', response);
      },
      default: (response: any) => {},
    },
  },
  VAULT_RATES: {
    url: (requestData = {}) => URLPrefixes.AUTH + '/v1' + '/rates?coinId=' + requestData.coinId,
    apiCallId: 'VAULT_RATES',
    method: 'GET',
    errorHandlers: {
      '409': (response: any) => {
        console.log('HANDLE 409 ERROR', response);
      },
      default: (response: any) => {},
    },
  },
  CREATE_VAULT: {
    url: () => URLPrefixes.AUTH + '/v1' + '/vault',
    apiCallId: 'CREATE_VAULT',
    method: 'POST',
    errorHandlers: {
      default: (response: any) => {},
    },
  },
  DELETE_VAULT: {
    url: (requestData: any) => URLPrefixes.AUTH + '/v1' + '/vault/' + requestData.id,
    apiCallId: 'DELETE_VAULT',
    method: 'DEL',
    errorHandlers: {
      default: (response: any) => {},
    },
  },
};
