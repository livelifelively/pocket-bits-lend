import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type VaultCreationParamList = {
  CreateVault: undefined;
  VaultCreated: undefined;
};

export type VaultHistoryParamList = {
  VaultHistory: undefined;
};

export type VaultActiveDepositsParamList = {
  ActiveDeposits: undefined;
};

// Can only navigate to Routes defined in ParamList
export type VaultActiveDepositsNavProps<T extends keyof VaultActiveDepositsParamList> = {
  navigation: StackNavigationProp<VaultActiveDepositsParamList, T>;
  route: RouteProp<VaultActiveDepositsParamList, T>;
};

export type VaultHistoryNavProps<T extends keyof VaultHistoryParamList> = {
  navigation: StackNavigationProp<VaultHistoryParamList, T>;
  route: RouteProp<VaultHistoryParamList, T>;
};


export type VaultCreationNavProps<T extends keyof VaultCreationParamList> = {
  navigation: StackNavigationProp<VaultCreationParamList, T>;
  route: RouteProp<VaultCreationParamList, T>;
};
