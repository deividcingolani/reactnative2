import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Layout} from '@ui-kitten/components';

import styles from './styles';

const Content = ({
  children,
  scrollEnabled = true,
  alwaysBounceVertical = false,
  enableAutomaticScroll = true,
  enableAutoAutomaticScroll = false,
  showsVerticalScrollIndicator = false,
  keyboardShouldPersistTaps = 'always',
  customStyles = {},
  wrapperStyles = {},
}) => {
  return (
    <Layout
      style={[styles.layout, wrapperStyles]}>
      <KeyboardAwareScrollView
        keyboardOpeningTime={100}
        // refreshControl={
        //   !onRefresh ? null : (
        //     <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        //   )
        // }
        scrollEnabled={scrollEnabled}
        nestedScrollEnabled={true}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        alwaysBounceVertical={alwaysBounceVertical}
        enableAutomaticScroll={enableAutomaticScroll}
        enableAutoAutomaticScroll={enableAutoAutomaticScroll}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        contentContainerStyle={[styles.container, customStyles]}
      >
        {children}
      </KeyboardAwareScrollView>
    </Layout>
  );
};

export default Content;
