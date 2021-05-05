import { floor, keyBy } from 'lodash';

export const A_WalletsCoinsValue = (wallets: [WalletBalanceResponse], coins: [CoinTickerResponse]) => {
  const keyedCoins = keyBy(coins, 'symbol');

  // #TODO #FIXME get user from app state.
  const userCurrency = {
    name: 'Indian Rupee',
    shortName: 'INR',
    symbol: 'Rs',
  };
  return wallets.map((val: WalletBalanceResponse) => {
    const walletCurrency: any = keyedCoins[val.coinId + userCurrency.shortName];
    const userHolding = parseFloat(val.availableBalance) + parseFloat(val.vaultBalance);
    const userHoldingValueInCurrency = floor(userHolding * walletCurrency.sell);

    return {
      id: val.coinId,
      currency: { ...userCurrency },
      holding: {
        value: userHolding,
        holdingValueInUserCurrency: userHoldingValueInCurrency,
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
};
