import React, {useState} from 'react';
import {Box} from 'design-system';
import {Header, Icon, Screen, Tabs} from 'shared';
import theme from 'theme';
import {styles} from './style';
import {Coupons, Matches} from './components';

const Favorites = () => {
  const [tabIndex, setTabIndex] = useState(1);

  const getIndex = (index: React.SetStateAction<number>) => {
    setTabIndex(index);
  };

  return (
    <Screen removeSafeaArea backgroundColor={theme.colors.OFF_WHITE}>
      <Header
        hasBackButton
        onPressLeftIcon={() => console.log('hello')}
        headerTitle="Favorites"
        onPressRightIcon={() => ''}
        hasRightIcon={<Icon name="add" />}
      />
      <Box style={styles.bodyContainer}>
        <Tabs
          getIndex={getIndex}
          currentIndex={tabIndex}
          tabRoutes={[
            {
              key: 'matches',
              title: 'Matches',
            },
            {
              key: 'coupons',
              title: 'Coupons',
            },
          ]}
          tabComponents={[
            {
              key: 'matches',
              component: <Matches />,
              func: () => {},
            },
            {
              key: 'coupons',
              component: <Coupons />,
              func: () => {},
            },
          ]}
        />
      </Box>
    </Screen>
  );
};

export default Favorites;
