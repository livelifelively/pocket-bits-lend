import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { WalletParamList } from './WalletParamList';

import DepositScreen from './screens/DepositScreen';
// import WalletScreen from "../WalletScreen";
import WalletScreen from './screens/WalletScreen';
import WithdrawScreen from './screens/WithdrawScreen';

// interface WalletStackProps {}

const Stack = createStackNavigator<WalletParamList>();

export const WalletStack: React.FC = ({ route }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Wallet"
    >
      <Stack.Screen options={{ headerTitle: 'Wallet' }} name="Wallet">
        {(props) => <WalletScreen {...props} walletDetails={route.params} />}
      </Stack.Screen>
      <Stack.Screen options={{ headerTitle: 'Deposit' }} name="Deposit" component={DepositScreen} />
      <Stack.Screen options={{ headerTitle: 'Withdraw' }} name="Withdraw" component={WithdrawScreen} />
    </Stack.Navigator>
  );
};
