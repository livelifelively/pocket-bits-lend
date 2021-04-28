import React from 'react';

import { DefaultLayout } from '../../../layouts/Default';
import { VaultActiveDepositsNavProps } from '../VaultParamList';
import { VaultActiveDeposits } from '../../../components/business/VaultActiveDeposits';
import Topbar from '../../../components/design/Topbar';

const ActiveDepositsScreen = ({ navigation }: VaultActiveDepositsNavProps<'ActiveDeposits'>) => {
  return (
    <DefaultLayout>
      <Topbar
        onBackButtonPress={() => {
          navigation.goBack();
        }}
        title="Active Deposits"
      />
      <VaultActiveDeposits showTitle={false} expandableListUnit={true} />
    </DefaultLayout>
  );
};

export default ActiveDepositsScreen;
