import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TopNavigation, Divider} from '@ui-kitten/components';

import {hp} from '../../../assets/styles/variables';

const HeaderMain = ({headerRight, headerCenter, headerLeft}) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <TopNavigation
        alignment='start'
        title={headerCenter}
        style={{marginTop: insets.top, height: hp(9)}}
        accessoryLeft={headerLeft}
        accessoryRight={headerRight}
      />
      <Divider />
    </>
  );
};

export default HeaderMain;
