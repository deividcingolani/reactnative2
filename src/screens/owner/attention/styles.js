import {StyleSheet} from 'react-native';
import {colors, hp, wp} from '../../../assets/styles/variables';

export const privacyStyles = StyleSheet.create({
  privacyButton: {
    marginBottom:20,
    marginLeft:16,
    marginRight:16,
    borderRadius: 25,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export const attentionStyles = StyleSheet.create({
  estilo: {
    backgroundColor: 'yellow',
  },
  backgroundImage: {
    height: hp(50),
    width: wp(100),
    marginTop: -hp(10),
    resizeMode: 'cover'
  },
  title: {
    fontSize: hp(1.8),
    textAlign: 'center',
    marginTop: hp(3),
    lineHeight: hp(3),
  },
  h1: {
    fontSize: hp(2.5),
    textAlign: 'left',
    marginTop: hp(2),
    marginLeft: hp(2),
    position: 'absolute',
    zIndex: 9999
  },
  button: {
    borderRadius: 25,
    marginBottom: hp(.8)
  },
});

export const waitingStyles = StyleSheet.create({
  infoContainer: {
    left:16,
    right:16,
    position: 'absolute',
    bottom: hp(5),
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  indicatorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(30),
  },
  waitingText: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: hp(5),
    margin: 'auto',
  },
  waitingHeader: {
    height: hp(20),
  },
  backgroundImage: { 
    flex: 1, 
    top: 0, 
    left: 0, 
    right: 0, 
    height: hp(90),
    resizeMode: 'stretch', 
    position: 'absolute' 
  },
});

export const videoCallStyles = StyleSheet.create({
  actionButtonContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  publisherContent: {
    width: 105,
    height: 130,
    position: 'absolute',
    top: 130,
    right: 21,
    borderWidth: 1,
    borderColor: colors.white,
    zIndex: 1,
  },
  doctorNameContent: {
    position: 'absolute',
    bottom: 120,
    left: 21,
  },
  doctorName: {
    color: colors.white,
    fontSize: hp(3),
    fontWeight: 'bold',
  },
  doctorSpeciality: {
    color: colors.white,
    fontSize: hp(2),
  },
  doctorNumber: {
    color: colors.white,
    fontSize: hp(2),
  },
  bottomButtonContent: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    height: 70,
    backgroundColor: colors.darkIndigo,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 10,
  },
});
