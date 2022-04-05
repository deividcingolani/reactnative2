import React, {useEffect} from 'react';
import {Image, View, useWindowDimensions} from 'react-native';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Toast from 'react-native-toast-message';
import {
  Text,
  Icon,
  TopNavigationAction,
  withStyles,
} from '@ui-kitten/components';

import OwnerStackNavigation from './owner/OwnerStackNavigation';
import {
  LoginScreen,
  ProfileScreen,
  VideoCallScreen,
  WaitingRoomScreen,
} from '../screens';
import PrivacyWebView from '../screens/owner/privacy/PrivacyWebView';
import {HeaderMain, HeaderProfile, Loading} from '../components';
import {Logo, LogoWhite} from '../assets/images';
import {hp} from '../assets/styles/variables';

const RootStack = createStackNavigator();

const RootStackNavigation = ({eva}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  // States
  const {token, authenticated} = useStoreState(states => states.auth.user);
  const {loading, loadingMsg, error, success, theme} = useStoreState(
    states => states.common,
  );
  // Actions
  const {setError, setSuccess, setOrientation} = useStoreActions(actions => actions.common);
  const logout = useStoreActions(actions => actions.auth.signOut);

  useEffect(() => {
    if (error || success) {
      Toast.show({
        type: 'my_custom_type',
        position: 'bottom',
        text1: error || success,
        visibilityTime: 3500,
        autoHide: true,
        bottomOffset: 20,
        onHide: () => {
          if (error) setError(null);
          if (success) setSuccess(null);
        },
        onPress: () => {
          if (error) setError(null);
          if (success) setSuccess(null);
        },
      });
    }
  }, [error, setError, setSuccess, success]);

  useEffect(() => {
    setOrientation(windowWidth > windowHeight ? 'landscape' : 'portrait');
  }, [windowHeight, windowWidth]);

  return (
    <View style={{flex: 1, position: 'relative'}}>
      {loading && <Loading info={loadingMsg} />}
      <RootStack.Navigator
        mode='modal'
        headerMode='screen'
        initialRouteName='auth'
        screenOptions={{
          // ...TransitionPresets.SlideFromRightIOS,
          cardStyle: {
            backgroundColor: eva.style.backgroundColor,
          },
          cardStyleInterpolator: ({current: {progress}}) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolate: 'clamp',
              }),
            },
          }),
        }}>
        {(token && authenticated) ? (
          <>
            <RootStack.Screen
              name='owner'
              component={OwnerStackNavigation}
              options={({navigation}) => ({
                header: () => (
                  <HeaderMain
                    headerLeft={() => null}
                    headerRight={() => (
                      <TopNavigationAction
                        // hitSlop={200}
                        onPress={() => navigation.navigate('profile')}
                        icon={iconProps => (
                          <Icon
                            name='person'
                            style={{
                              ...iconProps.style,
                              // width: hp(3.8),
                              // height: hp(3.8),
                            }}
                          />
                        )}
                      />
                    )}
                  />
                ),
              })}
            />

            <RootStack.Screen
              name='profile'
              component={ProfileScreen}
              options={({navigation}) => ({
                header: () => (
                  <HeaderProfile
                    headerLeft={() => (
                      <TopNavigationAction
                        onPress={() => navigation.goBack()}
                        icon={imgProps => (
                          <Icon {...imgProps} name='arrow-back-outline' />
                        )}
                      />
                    )}
                    headerCenterStyle={{alignItems: 'flex-start'}}
                    headerCenter={() => <Text category='h5'>Perfil</Text>}
                    headerRight={() => (
                      <TopNavigationAction
                        onPress={logout}
                        icon={iconProps => (
                          <Icon {...iconProps} name='power-outline' />
                        )}
                      />
                    )}
                  />
                ),
              })}
            />

            <RootStack.Screen
              name='waiting_room'
              component={WaitingRoomScreen}
              options={{headerShown: false, header: () => null}}
            />

            <RootStack.Screen
              name='video_call'
              component={VideoCallScreen}
              options={{headerShown: false, header: () => null}}
            />
          </>
        ) : (
          <>
            <RootStack.Screen
              name='auth'
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              mode='modal'
              name='privacy'
              component={PrivacyWebView}
              options={({navigation}) => ({
                header: () => (
                  <HeaderProfile
                    headerLeft={() => (
                      <TopNavigationAction
                        onPress={() => navigation.goBack()}
                        icon={imgProps => (
                          <Icon {...imgProps} name='arrow-back-outline' />
                        )}
                      />
                    )}
                    headerCenterStyle={{alignItems: 'flex-start'}}
                    headerCenter={() => <Text category='h5'>Términos y Condiciones</Text>}
                  />
                ),
              })}
            />
          </>
        )}
      </RootStack.Navigator>
    </View>
  );
};

export default withStyles(RootStackNavigation, theme => ({
  backgroundColor: theme['background-basic-color-1'],
}));
