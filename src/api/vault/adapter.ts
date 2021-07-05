import { capitalize } from 'lodash';
import wordsToNumbers from '../../services/words-to-numbers';

export const A_VaultActiveDeposits = (activeVaults) => {
  return activeVaults.map((val) => {
    return {
      id: val.id,
      principal: val.principal,
      coinId: val.coinId,
      tenure: {
        id: val.tenure,
        label: capitalize(val.tenure.split('_').join(' ')),
      },
      interestEarned: val.interestEarned,
      createdAt: val.createdAt,
      maturityDate: val.maturityDate,
    };
  });
};

export const A_VaultOptions = (availableOptions) => {
  return availableOptions.map((val) => {
    const duration = val.tenure.split('_');

    return {
      id: val.id,
      interestRatePercent: val.rate,
      coinId: val.coinId,
      vaultDuration: {
        value: wordsToNumbers(duration[0].toLowerCase()),
        timeUnit: capitalize(duration[1]),
      },
    };
  });
};
