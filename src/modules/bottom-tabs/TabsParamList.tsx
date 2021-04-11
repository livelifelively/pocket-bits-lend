// VaultNavProps
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type VaultParamList = {
  VaultCreationStack: undefined;
  VaultHistoryStack: undefined;
  VaultActiveDepositsStack: undefined;
};

// export type VaultHistoryParamList = {
//   VaultHistory: undefined;
// };

// export type VaultActiveDepositsParamList = {
//   ActiveDeposits: undefined;
// };

export type VaultNavProps<T extends keyof VaultParamList> = {
  navigation: StackNavigationProp<VaultParamList, T>;
  route: RouteProp<VaultParamList, T>;
};


export type RewardsNavProps<T extends keyof VaultParamList> = {
  navigation: StackNavigationProp<VaultParamList, T>;
  route: RouteProp<VaultParamList, T>;
}

export type HomeNavProps<T extends keyof VaultParamList> = {
  navigation: StackNavigationProp<VaultParamList, T>
  route: RouteProp<VaultParamList, T>
}