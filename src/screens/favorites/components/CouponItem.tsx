import React from 'react';
import {Box, Text} from 'design-system';
import {styles} from './style';
import {Image} from 'react-native';
import theme from 'theme';
import {hp, wp} from 'utils';

interface CouponItemProps {
  item: any;
}

interface MatchItemProps {
  home: string;
  away: string;
  odds: string;
}

export const CouponItem = ({item}: CouponItemProps) => {
  console.log(item);
  return (
    <Box style={styles.couponItemContainer}>
      <Box
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}>
        <Box flexDirection={'row'} alignItems={'center'}>
          <Image
            source={item.image}
            style={styles.profileImage}
            resizeMode="contain"
          />
          <Box ml={wp(10)}>
            <Text variant="bodyMedium">{item?.title}</Text>
            <Box
              flexDirection={'row'}
              alignItems={'center'}
              style={styles.mainStatContainer}>
              {item?.stats?.map((stat: string, index: number) => {
                return (
                  <Box
                    key={index}
                    style={[
                      styles.statContainer,
                      {
                        backgroundColor:
                          stat === 'w'
                            ? theme.colors.GREEN_TEXT
                            : theme.colors.RED,
                      },
                    ]}>
                    <Text style={styles.statText}>{stat}</Text>
                  </Box>
                );
              })}

              <Text style={styles.winRateText}>{item?.wins} of 5 wins</Text>
            </Box>
          </Box>
        </Box>
        <Box style={styles.statusContainer}>
          <Text style={styles.statusText}>{item?.status}</Text>
        </Box>
      </Box>
      <Box style={styles.matchListContainer}>
        {item?.matches.map((match: MatchItemProps, index: number) => (
          <Box
            key={index}
            flexDirection={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            mb={item?.matches?.length - 1 === index ? 0 : hp(16)}>
            <Image
              source={theme.images.ball}
              resizeMode="contain"
              style={styles.ballIcon}
            />
            <Text style={styles.matchText}>{match?.home}</Text>
            <Text style={styles.matchText}>Vs</Text>
            <Text style={styles.matchText}>{match?.away}</Text>
            <Text style={styles.matchText}>{match?.odds}</Text>
          </Box>
        ))}
      </Box>

      <Box
        flexDirection={'row'}
        alignItems={'center'}
        mt={hp(14)}
        justifyContent={'space-between'}>
        <Box style={styles.singleInfoContainer}>
          <Text style={styles.singleInfoText}>
            Total odds - <Text style={styles.infoText}>{item?.totalOdds}</Text>
          </Text>
        </Box>

        <Box style={styles.singleInfoContainer}>
          <Text style={styles.singleInfoText}>
            Games - <Text style={styles.infoText}>{item?.games}</Text>
          </Text>
        </Box>
        <Box style={styles.singleInfoContainer}>
          <Text style={styles.singleInfoText}>
            Total returns -{' '}
            <Text style={styles.infoText}>{item?.totalReturns}</Text>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
