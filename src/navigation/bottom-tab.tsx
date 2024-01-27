import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {BottomTab} from 'shared';
import {BottomTabStackParamList} from 'types';
import Home from 'screens/home';
import Favorites from 'screens/favorites';
import Matches from 'screens/matches';
import Predictions from 'screens/predictions';
import Bets from 'screens/bets';

export type TabScreenProp<Screen extends keyof BottomTabStackParamList> =
  React.FC<BottomTabScreenProps<BottomTabStackParamList, Screen>>;

const Tab = createBottomTabNavigator<BottomTabStackParamList>();

const TabBar = (props: any) => {
  return <BottomTab {...props} />;
};

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={TabBar}
      backBehavior="history"
      initialRouteName="Favorites">
      <Tab.Screen name="Dashboard" component={Home} />
      <Tab.Screen name="Bets" component={Bets} />
      <Tab.Screen name="Predictions" component={Predictions} />
      <Tab.Screen name="Matches" component={Matches} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
