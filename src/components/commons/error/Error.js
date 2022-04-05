import React from 'react';
import {Text, withStyles} from '@ui-kitten/components';

const Error = ({error, eva}) => {
  return (
    !!error?.message && <Text style={eva.style.caption}>{error?.message}</Text>
  );
};

export default withStyles(Error, theme => ({
  caption: {
    color: theme['color-warning-500'],
    fontFamily: 'System',
    fontSize: 12,
    fontWeight: '400',
  },
}));
