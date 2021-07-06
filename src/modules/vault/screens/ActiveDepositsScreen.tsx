import React from 'react';

import { DefaultLayout } from '../../../layouts/Default';
import { VaultActiveDepositsNavProps } from '../VaultParamList';
import { VaultActiveDeposits } from '../../../components/business/VaultActiveDeposits';

const ActiveDepositsScreen = ({ navigation }: VaultActiveDepositsNavProps<'ActiveDeposits'>) => {
  return (
    <DefaultLayout
      topBar={{
        showBackButton: true,
        title: 'Active Deposits',
        onBackButtonPress: () => {
          navigation.goBack();
        },
      }}
    >
      <VaultActiveDeposits showTitle={false} expandableListUnit={true} />
    </DefaultLayout>
  );
};

export default ActiveDepositsScreen;
