import React, {useState, useEffect, useCallback} from 'react';
import {StyleProp, TouchableOpacity} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {ScrollView} from 'react-native-gesture-handler';
import {deviceWidth} from 'utils';
import {styles} from './style';
import theme from 'theme';
import {Box, Text} from 'design-system';

type tabRoute = {
  key: string;
  title: string;
};

type componentObj = {
  key: string;
  component: any;
  func: any;
};

interface ITabs {
  tabRoutes: tabRoute[];
  tabComponents: componentObj[];
  getCurrentRoute?: (currentRoute: tabRoute) => void;
  getIndex: (index: number) => void;
  useSceneMap?: boolean;
  style?: StyleProp<any>;
  bottomComponent?: JSX.Element;
  sceneContainerStyle?: StyleProp<any>;
  currentIndex: number;
}

export const Tabs = ({
  tabRoutes,
  tabComponents,
  getCurrentRoute,
  getIndex,
  useSceneMap = false,
  style,
  bottomComponent,
  sceneContainerStyle,
  currentIndex,
}: ITabs) => {
  const initialLayout = {width: deviceWidth};

  const [routes] = useState(tabRoutes);

  const createSceneMap = () => {
    let sceneObj: any = {};
    for (let i = 0; i < tabComponents.length; i += 1) {
      sceneObj[tabComponents[i].key] = tabComponents[i].func;
    }
    return sceneObj;
  };

  const renderScene = ({route}: any) => {
    switch (route.key) {
      case route.key:
        const FoundComponent = tabComponents.find(
          component => component.key === route.key,
        );

        if (bottomComponent) {
          return (
            <ScrollView style={styles.scrollViewContainer}>
              {FoundComponent?.component}
              {bottomComponent}
            </ScrollView>
          );
        }
        return FoundComponent?.component;
      default:
        return null;
    }
  };

  const sceneMap = SceneMap(createSceneMap());

  const getRoute = useCallback(() => {
    getCurrentRoute && getCurrentRoute(routes[currentIndex]);
    getIndex && getIndex(currentIndex);
  }, [currentIndex, getCurrentRoute, getIndex, routes]);

  useEffect(() => {
    getRoute();
  }, [currentIndex, getRoute]);

  const renderTabBar = (props: {navigationState: {routes: any[]}}) => {
    return (
      <Box style={[styles.tabBar]}>
        {props.navigationState.routes.map((route, i) => (
          <Box
            as={TouchableOpacity}
            onPress={() => {
              getIndex(i);
            }}
            style={
              currentIndex === i ? styles.activeTabItem : styles.tabbarItem
            }
            key={i}
            activeOpacity={0.8}>
            {currentIndex === i ? (
              <Text
                style={{
                  ...styles.tabTitle,
                  color: theme.colors.PRIMARY_GREEN,
                }}>
                {route.title}
              </Text>
            ) : (
              <Text style={{...styles.tabTitle}}>{route.title}</Text>
            )}
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <TabView
      navigationState={{index: currentIndex, routes}}
      renderScene={useSceneMap ? sceneMap : renderScene}
      onIndexChange={getIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1, ...style}}
      sceneContainerStyle={sceneContainerStyle}
    />
  );
};

export default Tabs;
