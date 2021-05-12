import { floor, keyBy } from 'lodash';
import Logger from '../../services/logger';

export const A_WalletsCoinsValue = (wallets: [WalletBalanceResponse], coins: [CoinTickerResponse]) => {
  let returnValue = [];
  const keyedCoins = keyBy(coins, 'symbol');

  // #TODO #FIXME get user from app state.
  const userCurrency = {
    name: 'Indian Rupee',
    shortName: 'INR',
    symbol: 'Rs',
  };

  try {
    returnValue = wallets.map((val: WalletBalanceResponse) => {
      const walletCurrency: any = keyedCoins[val.coinId + userCurrency.shortName];
      const userTotalHolding = parseFloat(val.availableBalance) + parseFloat(val.vaultBalance);
      const userTotalHoldingInCurrency = floor(userTotalHolding * walletCurrency.sell);

      return {
        id: val.coinId,
        currency: { ...userCurrency },
        holding: {
          total: {
            value: userTotalHolding,
            valueInUserCurrency: userTotalHoldingInCurrency,
          },
          available: {
            value: parseFloat(val.availableBalance),
            valueInUserCurrency: floor(parseFloat(val.vaultBalance) * walletCurrency.sell),
          },
          vault: {
            value: parseFloat(val.vaultBalance),
            valueInUserCurrency: floor(parseFloat(val.vaultBalance) * walletCurrency.sell),
          },
        },
        crypto: {
          valueInUserCurrency: walletCurrency.sell,
          shortName: val.coinId,
          changeInPercent: {
            changeDirection: '-',
            changeValue: '2.56',
          },
        },
      };
    });
  } catch (e) {
    Logger.error('ADAPTER__WALLETS_COIN_VALUE', e);
    throw e;
  }

  return returnValue;
};
