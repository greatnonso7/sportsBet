import React from 'react';
import {Box, Text} from 'design-system';
import {Icon} from 'shared';
import {headerProps} from './type';
import {TouchableOpacity} from 'react-native';
import {fontSz, populateHitSlop} from 'utils';
import theme from 'theme';

export const Header = ({
  hasBackButton,
  hasRightIcon,
  onPressRightIcon,
  onPressLeftIcon,
  containerProps,
  headerTitle,
  headerTitleStyle,
}: headerProps) => {
  const renderHeaderLeft = () => {
    if (hasBackButton) {
      return (
        <>
          <Box
            as={TouchableOpacity}
            activeOpacity={0.8}
            position={'absolute'}
            left={0}
            onPress={() => onPressLeftIcon && onPressLeftIcon()}
            hitSlop={populateHitSlop(5)}>
            <Box>
              <Icon name="arrow-back" />
            </Box>
          </Box>
        </>
      );
    }
  };

  const renderHeaderTitle = () => {
    if (headerTitle) {
      return (
        <Box style={headerTitleStyle}>
          <Text
            variant="headerBig"
            fontSize={fontSz(16)}
            color={theme.colors.BLACK}>
            {headerTitle}
          </Text>
        </Box>
      );
    }
  };

  const renderHeaderRight = () => {
    if (hasRightIcon) {
      return (
        <Box
          position={'absolute'}
          right={0}
          onPress={onPressRightIcon}
          hitSlop={populateHitSlop(5)}
          activeOpacity={0.8}
          as={TouchableOpacity}>
          {hasRightIcon}
        </Box>
      );
    }
  };

  return (
    <Box>
      <Box {...containerProps} px={16}>
        <Box
          height={55}
          alignItems={'center'}
          flexDirection={'row'}
          justifyContent={'center'}>
          {renderHeaderLeft()}
          {renderHeaderTitle()}
          {renderHeaderRight()}
        </Box>
      </Box>
    </Box>
  );
};
