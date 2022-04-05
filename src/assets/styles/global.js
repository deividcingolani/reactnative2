import {StyleSheet} from 'react-native';

const landscape = StyleSheet.create({
  estilo: {
    backgroundColor: 'red',
  },
});

const portrait = StyleSheet.create({
  estilo: {
    backgroundColor: 'yellow',
  },
});

export const globalStyles = {
  landscape,
  portrait,
};
