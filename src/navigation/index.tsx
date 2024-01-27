import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import DashboardStack from './bottom-tab';
import {RootStackParamList} from 'types';
import {navigationRef} from './utils';

const Stack = createStackNavigator<RootStackParamList>();

const AppNav = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
        initialRouteName={'AppDashboard'}>
        <Stack.Screen name="AppDashboard" component={DashboardStack} />
      </Stack.Navigator>
    </>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNav />
    </NavigationContainer>
  );
};

export default Navigation;
