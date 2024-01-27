import {StyleSheet} from 'react-native';
import theme from 'theme';
import {fontSz, hp, wp} from 'utils';

export const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: theme.colors.OFF_WHITE_100,
    marginTop: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: wp(16),
    height: hp(58),
  },
  tabbarItem: {
    alignItems: 'center',
    width: wp(179),
    height: hp(38),
    borderBottomWidth: hp(2),
    alignSelf: 'center',
    borderBottomColor: theme.colors.OFF_WHITE_200,
    justifyContent: 'center',
  },
  activeTabItem: {
    borderBottomWidth: hp(2),
    borderBottomColor: theme.colors.GREEN_TEXT,
    height: hp(38),
    width: wp(179),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabDivider: {
    borderRightWidth: 0,
  },
  tabTitle: {
    fontSize: fontSz(14),
    fontFamily: theme.font.PoppinsMedium,
  },
});
