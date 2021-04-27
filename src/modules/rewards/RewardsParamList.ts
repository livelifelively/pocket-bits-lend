import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RewardsParamList = {
  Rewards: undefined;
};

export type RewardsNavProps<T extends keyof RewardsParamList> = {
  navigation: StackNavigationProp<RewardsParamList, T>;
  route: RouteProp<RewardsParamList, T>;
};
