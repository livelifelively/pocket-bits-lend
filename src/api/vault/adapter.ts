import { capitalize } from 'lodash';
import wordsToNumbers from '../../services/words-to-numbers';

export const A_VaultActiveDeposits = (activeVaults: any) => {
  return activeVaults.map((val: any) => {
    const duration = val.tenure.split('_');

    return {
      id: val.id,
      principal: val.principal,
      coinId: val.coinId,
      tenure: {
        id: val.tenure,
        label: `${wordsToNumbers(duration[0].toLowerCase())} ${capitalize(duration[1])}`,
      },
      interestEarned: val.interestEarned,
      interestRate: val.rate,
      createdAt: val.createdAt,
      maturityDate: val.maturityDate,
    };
  });
};

export const A_VaultOptions = (availableOptions: any, coinId: string) => {
  const restructured = availableOptions.map((val: any) => {
    const duration = val.tenure.split('_');

    return {
      id: val.id,
      interestRatePercent: val.rate,
      coinId: val.coinId,
      vaultDuration: {
        value: wordsToNumbers(duration[0].toLowerCase()),
        timeUnit: capitalize(duration[1]),
        tenure: val.tenure,
      },
    };
  });
  return {
    coinId,
    rates: restructured,
  };
};
