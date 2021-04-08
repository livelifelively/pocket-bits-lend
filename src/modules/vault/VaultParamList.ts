import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type VaultParamList = {
  Vault: undefined;
  ActiveDeposits: undefined;
  CreateVault: undefined;
  VaultCreated: undefined;
  VaultHistory: undefined;
};

export type VaultNavProps<T extends keyof VaultParamList> = {
  navigation: StackNavigationProp<VaultParamList, T>;
  route: RouteProp<VaultParamList, T>;
};
