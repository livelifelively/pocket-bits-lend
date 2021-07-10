/* eslint-disable @typescript-eslint/no-explicit-any */

import { API } from '../../constants/api';

const URLPrefixes = {
  AUTH: `${API.baseURL}${API.apiPrefix}`,
};

export const WalletAPIConfigurations = {
  // SIGNUP: {
  //   url: () => URLPrefixes.AUTH + '/register',
  //   apiCallId: 'SIGNUP',
  //   method: 'POST',
  //   errorHandlers: {
  //     '409': (response: any) => {
  //       console.log('HANDLE 409 ERROR', response);
  //     },
  //     default: (response: any) => {
  //       console.log('HANDLE GENERIC ERROR', response);
  //     },
  //   },
  // },
  WALLET_ALL: {
    url: (requestData: WalletsBalanceRequest) => URLPrefixes.AUTH + '/v1' + '/balances',
    apiCallId: 'WALLET_ALL',
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
  WALLET_COIN_BALANCE: {
    url: (requestData: WalletsBalanceRequest) => URLPrefixes.AUTH + '/v1' + '/balances/' + requestData.coinId,
    apiCallId: 'WALLET_COIN_BALANCE',
    method: 'GET',
    errorHandlers: {
      '409': (response: any) => {
        console.log('HANDLE 409 ERROR', response);
      },
      default: (response: any) => {},
    },
  },
  WALLET_ADDRESS: {
    url: (requestData: WalletsAddressRequest) =>
      URLPrefixes.AUTH + '/v1' + `/transfers/getAddress/${requestData.coinId}`,
    apiCallId: 'WALLET_ADDRESS',
    method: 'GET',
    errorHandlers: {
      default: (response: any) => {
        // console.log('HANDLE GENERIC ERROR', response);
      },
    },
  },
  RESEND_EMAIL_OTP: {
    url: (requestData: WalletsBalanceRequest) =>
      URLPrefixes.AUTH + `/resendOtpEmail?email=${requestData.email}&type=${requestData.type}`,
    apiCallId: 'RESEND_EMAIL_OTP',
    method: 'GET',
    errorHandlers: {
      default: (response: any) => {
        // console.log('HANDLE GENERIC ERROR', response);
      },
    },
  },
  COIN_TICKER: {
    url: () => 'https://ticker.pocketbits.in/api/v1/ticker',
    apiCallId: 'COIN_TICKER',
    method: 'GET',
    errorHandlers: {
      default: (response: any) => {},
    },
  },
};
