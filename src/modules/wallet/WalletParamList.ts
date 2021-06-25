import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type WalletParamList = {
  Wallet: {
    walletDetails: Record<string, unknown>;
  };
  Deposit: undefined;
  Withdraw: undefined;
};

export type WalletNavProps<T extends keyof WalletParamList> = {
  navigation: StackNavigationProp<WalletParamList, T>;
  route: RouteProp<WalletParamList, T>;
};
