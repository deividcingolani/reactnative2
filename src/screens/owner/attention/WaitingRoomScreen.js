import React, {useEffect, memo, useState, useRef} from 'react';
import {View, Animated, Easing, Pressable, Image} from 'react-native';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {
  Text,
  withStyles,
  Button,
  Spinner,
  Divider,
  useTheme,
} from '@ui-kitten/components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {waitingStyles} from './styles';
import {Container, Content} from '../../../components';
import {getNetworkSpeed} from '../../../lib/utils/common';
import { colors, hp } from '../../../assets/styles/variables';
import {WaitingBackground} from '../../../assets/images';

let interval = null;

const WaitingRoomScreen = memo(({eva}) => {
  const animatedValue = new Animated.Value(0);
  const insets = useSafeAreaInsets();
  const isMounted = useRef(true);
  const [speed, setSpeed] = useState('');
  const [loadingSpeed, setLoadingSpeed] = useState(false);
  // States
  const theme = useTheme();
  const {
    queue,
    connectionLost,
    idPatient,
    insuranceCode,
    reason,
    symptoms,
  } = useStoreState(states => states.service);
  // Actions
  const {createQueue, endCall} = useStoreActions(actions => actions.service);
  const {info} = useStoreState(states => states.auth.user);


  useEffect(() => {
    setLoadingSpeed(true);
    getNetworkSpeed(isMounted)
      .then(value => {
        if (isMounted.current) {
          setSpeed(value);
        }
      })
      .finally(() => setLoadingSpeed(false));

    interval = setInterval(() => {
      createQueue({
        connectionLost,
        id_patient: info._id,
        insurance_code: insuranceCode,
        reason,
        symptoms,
        interval,
      });
    }, 10000);
    animate();

    return () => {
      isMounted.current = false;
      setSpeed('');
      clearInterval(interval);
    };
  }, []);

  const animate = () => {
    animatedValue.setValue(0);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 2200,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(o => {
      // console.log('Animated O ::: ', o);
      if (o.finished) {
        animate();
      }
      // animate();
    });
  };

  const endingCall = () => {
    clearInterval(interval);
    isMounted.current = false;
    endCall({id_patient: info._id});
  };

  const textSize = animatedValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [105, 60, 105],
  });

  return (
    <View
      style={{
        paddingTop: insets.top,
        margin: 0,
        backgroundColor: theme['background-basic-color-1'],
        flex: 1,
      }}>
      <Image source={WaitingBackground} style={waitingStyles.backgroundImage} />
      <View style={{ flex: 1}}>
        <View style={waitingStyles.titleContainer}>
          <Text
            category='h5'
            style={{textAlign: 'center', flex: 1, color: colors.lightGray}}>
            Sala de espera
          </Text>
          <Pressable onPress={endingCall}>
            <Text category='h6' style={{alignSelf: 'flex-end', color: colors.lightGray}}>
              X
            </Text>
          </Pressable>
        </View>

        <View style={waitingStyles.infoContainer} >
          <View style={waitingStyles.indicatorContainer}>
            <Animated.Text style={{fontSize: textSize, color: colors.blueMercantil}}>
              {queue?.position > 1 ? queue?.position - 1 : 0}
            </Animated.Text>
            <Text style={waitingStyles.waitingText}>Personas antes que tú</Text>
          </View>
          <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: hp(5),
              }}>
              <View>
                <Text>Calidad de tu internet</Text>
              </View>
              <View>
                {loadingSpeed ? <Spinner size='tiny' /> : <Text>{speed}</Text>}
              </View>
          </View>
          <Button status='danger' size='giant' style={{ borderRadius: 25 }} onPress={endingCall}>
            Cancelar llamada
          </Button>
        </View>
      </View>
    </View>
  );
});

export default withStyles(WaitingRoomScreen, theme => ({
  primaryColor: theme['color-primary-500'],
}));
