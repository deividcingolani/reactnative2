import {Dimensions} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');

const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const colors = {
  green: '#007A53',
  black: '#000000',
  coral: '#f7553b',
  white: '#ffffff',
  whiteTwo: '#fafafa',
  darkIndigo: '#200844',
  lightishRed: '#fb314a',
  reddishPink: '#ff2152',
  charcoalGrey: '#43484d',
  paleGrey: '#e6ebf1',
  blueGrey: '#9aabb5',
  paleLavender: '#f1e8ff',
  paleGreyBlur: 'rgba(32, 8, 68, 0.16)',
  yellowMercantil: 'rgba(253, 165, 27, 1)',
  blueMercantil: 'rgba(41, 128, 238, 1)',
  blueMercantil: 'rgba(41, 126, 238, 1)',
  lightGreen: 'rgba(66, 216, 144, 1)',
  palidWhite: 'rgba(248, 248, 248, 1)',
  lightGray: 'rgba(199, 199, 199, 1)',
};

const titles = {
  title: hp(3.3),
  welcomeTitle: hp(2.5),
  cardTitle: hp(2.2),
};

const subTitles = {
  welcomeSubtitle: hp(1.8),
};

const buttons = {
  wrapper: hp(1),
  buttonText: hp(2.2),
  buttonHeight: hp(6),
  buttonPadding: hp(2.2),
  imgHeight: hp(15),
  imgWidth: wp(20),
};

const inputs = {
  height: hp(7),
  width: wp(10),
  fontSize: hp(2),
  paddingVertical: hp(1),
  paddingHorizontal: hp(1),
  iconSize: hp(3.2),
  radius: 4,
};

const checkboxes = {
  width: hp(2.5),
  height: hp(2.5),
  widthContent: hp(1.7),
  heightContent: hp(1.7),
  padding: hp(1),
  margin: hp(1),
};

const cards = {
  title: hp(1.9),
  padding: hp(1.8),
  margin: hp(1.8),
};

const modals = {
  title: hp(2.8),
  text: hp(1.9),
  padding: hp(1.5),
  margin: hp(1.8),
  marginLeft: hp(2),
  lineHeight: hp(2.7),
  imageWidth: hp(10),
  imageHeight: hp(10),
};

const header = {
  title: hp(2),
  height: hp(8.5),
  padding: hp(2),
  iconSize: hp(3.2),
};

const headerAdmin = {
  title: hp(2),
  height: hp(14),
  padding: hp(2),
  paddingTop: hp(3),
  bottomText: hp(1.75),
  imageWidth: hp(15),
  imageHeight: hp(5.4),
  marginTop: hp(1),
};

const accordions = {
  header: hp(8),
  backgroundHeader: colors.white,
};

export {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  colors,
  titles,
  subTitles,
  buttons,
  inputs,
  cards,
  modals,
  header,
  headerAdmin,
  hp,
  wp,
  checkboxes,
  accordions,
};
