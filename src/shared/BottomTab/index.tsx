import {Box, Text} from 'design-system';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Icon} from 'shared/Icon';
import theme from 'theme';
import {fontSz, hp, populateHitSlop} from 'utils';

export const BottomTab = (props: any) => {
  const {bottom} = useSafeAreaInsets();

  const bottomPadding = bottom ? Math.floor(bottom) - hp(20) : 0;
  const activeIndex = props.state?.index;
  const screenName = props.state?.routes[activeIndex].name;
  const navigation = props.navigation;

  return (
    <Box
      alignItems="center"
      bg="white"
      borderTopColor={theme.colors.WHITE}
      borderTopWidth={1}
      flexDirection="row"
      px={hp(20)}
      height={hp(80)}
      justifyContent="space-between"
      style={styles.boxShadow}
      pb={bottomPadding}>
      {props.state?.routes.map((route: any) => {
        const color =
          route.name === screenName
            ? theme.colors.PRIMARY_GREEN
            : theme.colors.DARK_BLUE_05;
        const name = route.name?.toLowerCase();

        return (
          <Box
            as={TouchableOpacity}
            activeOpacity={1}
            alignItems="center"
            flexDirection="column"
            hitSlop={populateHitSlop(10)}
            justifyContent="center"
            key={route.name}
            onPress={() => navigation.navigate(route.name)}>
            <Icon name={name} color={color} />
            <Text
              variant="bodyMedium"
              mt={hp(1.5)}
              fontSize={fontSz(12)}
              color={color}>
              {route.name}
            </Text>
          </Box>
        );
      })}
    </Box>
  );
};

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: hp(5),
  },
});

export default BottomTab;
