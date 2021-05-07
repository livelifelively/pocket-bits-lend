import { capitalize } from 'lodash';

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
