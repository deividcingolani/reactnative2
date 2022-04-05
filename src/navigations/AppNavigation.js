import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry, Text} from '@ui-kitten/components';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {NetworkProvider} from 'react-native-offline';

import {default as CustomTheme} from '../assets/others/custom-theme.json';

import {isReadyRef, navigationRef} from './navigation';
import RootStackNavigation from './RootStackNavigation';
import {colors, hp} from '../assets/styles/variables';

const toastConfig = {
  my_custom_type: ({text1, props, ...rest}) => (
    <View
      style={{
        paddingHorizontal: hp(1.5),
        paddingVertical: hp(1.2),
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 9999,
      }}>
      <Text
        style={{
          color: colors.white,
          lineHeight: hp(2.5),
        }}>
        {text1}
      </Text>
    </View>
  ),
};

const AppNavigation = () => {
  // States
  const {theme} = useStoreState(states => states.common);
  // Actions
  const {setLoading, setError, setSuccess} = useStoreActions(actions => actions.common);

  useEffect(() => {
    setLoading(false);
    setError(null);
    setSuccess(null);
    return () => {
      isReadyRef.current = false;
    };
  }, []);

  return (
    <>
      <NetworkProvider>
        <StatusBar
          barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
        />
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{...eva[theme], ...CustomTheme}}>
          <NavigationContainer
            theme={{...DefaultTheme, dark: false}}
            ref={navigationRef}
            onReady={() => {
              isReadyRef.current = true;
            }}>
            <RootStackNavigation />
            <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
          </NavigationContainer>
        </ApplicationProvider>
      </NetworkProvider>
    </>
  );
};

export default AppNavigation;
