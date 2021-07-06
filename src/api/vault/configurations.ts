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
      default: (response: any) => {
        // console.log('HANDLE GENERIC ERROR', response);
      },
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
      default: (response: any) => {
        // console.log('HANDLE GENERIC ERROR', response);
      },
    },
  },
};
