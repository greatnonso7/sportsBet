import {NavigatorScreenParams} from '@react-navigation/native';

export type RootStackParamList = {
  Dashboard: NavigatorScreenParams<DashboardStackParamList>;
};

export type DashboardStackParamList = {
  Home: BottomTabStackParamList;
};

export type BottomTabStackParamList = {
  Dashboard: undefined;
  Bets: undefined;
  Predictions: undefined;
  Matches: undefined;
  Favorites: undefined;
};
