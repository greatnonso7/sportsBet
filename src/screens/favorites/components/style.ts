import {StyleSheet} from 'react-native';
import theme from 'theme';
import {fontSz, hp, wp} from 'utils';

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(20),
    marginHorizontal: wp(18),
  },
  contentContainerStyle: {
    marginTop: hp(10),
    paddingBottom: hp(200),
  },
  headerTitleText: {
    fontFamily: theme.font.PoppinsSemiBold,
    fontSize: fontSz(16),
    lineHeight: hp(20),
  },
  headerSubText: {
    fontFamily: theme.font.PoppinsMedium,
    fontSize: fontSz(12),
    color: theme.colors.BLACK,
    opacity: 0.5,
  },
  couponItemContainer: {
    padding: hp(14),
    backgroundColor: theme.colors.WHITE,
    marginBottom: hp(14),
    borderRadius: hp(8),
    shadowColor: '#000',
    marginHorizontal: wp(18),
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  statContainer: {
    width: wp(14),
    height: hp(14),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(5),
    borderRadius: hp(3),
  },
  mainStatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(6),
  },
  statText: {
    fontFamily: theme.font.PoppinsMedium,
    fontSize: fontSz(9),
    color: theme.colors.WHITE,
    textTransform: 'uppercase',
  },
  winRateText: {
    paddingLeft: wp(8),
    fontFamily: theme.font.PoppinsMedium,
    fontSize: fontSz(12),
    opacity: 0.5,
  },
  statusContainer: {
    position: 'absolute',
    paddingHorizontal: wp(9),
    paddingVertical: hp(6),
    right: -wp(15),
    top: -hp(15),
    borderTopRightRadius: hp(6),
    borderBottomLeftRadius: hp(6),
    backgroundColor: theme.colors.LIGHT_GREEN,
  },
  statusText: {
    fontFamily: theme.font.PoppinsMedium,
    fontSize: fontSz(11),
    color: theme.colors.GREEN_TEXT,
  },
  matchListContainer: {
    marginTop: hp(18),
    borderWidth: 1,
    borderRadius: hp(8),
    paddingVertical: hp(19),
    paddingHorizontal: wp(16),
    backgroundColor: theme.colors.OFF_WHITE_300,
    borderColor: theme.colors.OFF_WHITE_400,
  },
  ballIcon: {
    width: 14,
    height: 14,
  },
  matchText: {
    fontFamily: theme.font.PoppinsRegular,
    fontSize: fontSz(10),
    opacity: 0.5,
  },
  singleInfoContainer: {
    paddingHorizontal: wp(8),
    paddingVertical: hp(6),
    borderRadius: hp(100),
    backgroundColor: theme.colors.OFF_WHITE_300,
    borderColor: theme.colors.OFF_WHITE_400,
    borderWidth: 1,
  },
  singleInfoText: {
    fontFamily: theme.font.PoppinsMedium,
    fontSize: fontSz(10),
    color: theme.colors.HALF_BLACK,
  },
  infoText: {
    color: theme.colors.BLACK,
    fontSize: fontSz(10),
    fontFamily: theme.font.PoppinsMedium,
  },
});
