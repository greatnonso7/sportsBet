import React from 'react';
import {Box, Text} from 'design-system';
import {SectionList} from 'react-native';
import {coupons} from 'data';
import {styles} from './style';
import {CouponItem} from './CouponItem';

export const Coupons = () => {
  return (
    <Box>
      <SectionList
        sections={coupons}
        stickySectionHeadersEnabled={false}
        contentContainerStyle={styles.contentContainerStyle}
        renderSectionHeader={({section: {title, count}}) => (
          <Box style={styles.headerContainer}>
            <Text style={styles.headerTitleText}>{title}</Text>
            <Text style={styles.headerSubText}>
              {count} {count === 1 ? 'Coupon' : 'Coupons'}
            </Text>
          </Box>
        )}
        renderItem={({item, index}) => {
          return <CouponItem item={item} key={index} />;
        }}
      />
    </Box>
  );
};
