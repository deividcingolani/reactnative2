import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Platform,
  Dimensions,
} from 'react-native';
import {Text, Icon} from '@ui-kitten/components';
import {OTPublisher, OTSession, OTSubscriber} from 'opentok-react-native';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {useIsConnected} from 'react-native-offline';

import {videoCallStyles} from './styles';
import {FlipCamera} from '../../../assets/images';

const {width, height} = Dimensions.get('window');

const VideoCallScreen = ({navigation}) => {
  const isConnected = useIsConnected();
  const [connected, setConnected] = useState(false);
  const [publishVideo, setPublishVideo] = useState(true);
  const [publishAudio, setPublishAudio] = useState(true);
  const [cameraPosition, setCameraPosition] = useState('front');
  const [doctorConnected, setDoctorConnected] = useState(false);
  const [reconnecting, setReconnecting] = useState(false);
  const [disconnectedByUser, setDisconnectedByUser] = useState(true);

  // States
  const {info} = useStoreState(states => states.auth.user);
  const {idPatient, queue} = useStoreState(
    states => states.service,
  );
  // Actions
  const {setError, setSuccess, setLoading} = useStoreActions(
    actions => actions.common,
  );
  const {setConnectionLost, setQueue, endCall} = useStoreActions(
    actions => actions.service,
  );

  useEffect(() => {
    const {connection} = queue;
    setConnected(
      Boolean(connection?.api && connection?.sessionId && connection?.token),
    );

    const unsubscribe = navigation.addListener('beforeRemove', e => {
      if (!reconnecting && (!disconnectedByUser || connected)) {
        e.preventDefault();
        return;
      }
      setConnected(false);
      setQueue({});
    });

    return () => unsubscribe;
  }, [navigation]);

  useEffect(() => {
    if (!connected && !isConnected) {
      setError(
        'Conexión perdida. Verifique su conexión a internet y vuelva a intentarlo.',
      );
      goBack(false);
    }
  }, [connected]);

  useEffect(() => {
    if (reconnecting) setLoading({value: true, msg: 'Se perdió la conexión.'});
    else setLoading(false);
  }, [setLoading, reconnecting]);

  const sessionEventHandlers = {
    sessionDisconnected: () => {
      console.log('session: Session disconnected ', isConnected);
      setConnected(false);
    },
    sessionReconnected: () => {
      console.log('session: Session reconnected');
      setPublishVideo(false);
      setPublishAudio(false);
      setReconnecting(false);
    },
    sessionReconnecting: () => {
      console.log('session: Session reconnecting');
      setReconnecting(true);
    },
    streamCreated: obj => {
      console.log('stream: Stream created: ', obj);
    },
    streamDestroyed: obj => {
      console.log('stream: Stream destroyed: ', obj);
      setPublishVideo(false);
      setPublishAudio(false);
      if (connected) {
        setSuccess(
          'Llamada finalizada por el médico. ¡Gracias por preferirnos!',
        );
        goBack();
      }
    },
  };

  const subscriberEventHandlers = {
    connected: () => {
      console.log('Subscriber connected');
      setLoading(false);
      setDoctorConnected(true);
    },
  };

  const publisherEventHandlers = {
    streamDestroyed: () => {
      console.log('Publisher stream destroyed');
    },
  };

  const onSessionError = error => {
    console.log('On session error: ', error);
  };

  const toggleVideo = () => {
    setPublishVideo(!publishVideo);
  };

  const toggleAudio = () => {
    setPublishAudio(!publishAudio);
  };

  const toggleCamera = () => {
    setCameraPosition(cameraPosition === 'front' ? 'back' : 'front');
  };

  const goBack = (setConnect = true) => {
    if (setConnect) setConnected(false);
    setQueue({});
    setLoading(false);
    navigation.navigate('owner_top_tab');
  };

  const endingCall = async () => {
    // setConnected(false);
    setDisconnectedByUser(true);
    if (!reconnecting) {
      await endCall({id_patient: info._id});
    } else {
      setQueue({});
      setConnectionLost(true);
      navigation.navigate('attention_tab');
    }
  };

  return (
    connected && (
      <>
        <View style={{width, flex: 1}}>
          <OTSession
            apiKey={queue?.connection?.api}
            sessionId={queue?.connection?.sessionId}
            token={queue?.connection?.token}
            onError={onSessionError}
            eventHandlers={sessionEventHandlers}
            {...(Platform.OS !== 'ios' && {
              options: {
                androidOnTop: 'publisher',
              },
            })}>
            <View style={videoCallStyles.publisherContent}>
              <OTPublisher
                style={{width: 103, height: 128}}
                properties={{
                  publishVideo,
                  cameraPosition,
                  publishAudio,
                }}
                eventHandlers={publisherEventHandlers}
              />
            </View>
            <OTSubscriber
              style={{width: '100%', height, zIndex: -1}}
              eventHandlers={subscriberEventHandlers}
            />
          </OTSession>
        </View>

        {/* CHAT AND CAMERA ACTION BUTTON / DOCTOR DESCRIPTION */}
        {doctorConnected && (
          <>
            <View style={videoCallStyles.doctorNameContent}>
              <Text style={videoCallStyles.doctorName}>
                {`Dr. ${queue.doctor?.full_name}`}
              </Text>
              <Text style={videoCallStyles.doctorSpeciality}>
                {queue.doctor?.speciality}
              </Text>
              <Text style={videoCallStyles.doctorNumber}>
                {queue.doctor?.graduation_year}
              </Text>
            </View>
            <TouchableOpacity
              onPress={toggleCamera}
              style={[
                videoCallStyles.actionButtonContainer,
                {
                  position: 'absolute',
                  right: 21,
                  top: 50,
                },
              ]}>
              <Image source={FlipCamera} style={{width: 30, height: 30}} />
            </TouchableOpacity>
          </>
        )}

        {/* BOTTOM BUTTON ACTION */}
        <View style={videoCallStyles.bottomButtonContent}>
          <TouchableOpacity
            onPress={toggleAudio}
            style={videoCallStyles.actionButtonContainer}>
            <Icon
              name={`mic${publishAudio ? '' : '-off'}`}
              style={{width: 30, height: 30}}
              fill='#200844'
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={endingCall}
            style={[
              videoCallStyles.actionButtonContainer,
              {backgroundColor: '#FF2152'},
            ]}>
            <Icon
              name='phone'
              style={{color: 'white', width: 30, height: 30}}
              fill='#ffffff'
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={toggleVideo}
            style={videoCallStyles.actionButtonContainer}>
            <Icon
              name={`video${publishVideo ? '' : '-off'}`}
              style={{width: 30, height: 30}}
              fill='#200844'
            />
          </TouchableOpacity>
        </View>
      </>
    )
  );
};

export default VideoCallScreen;
