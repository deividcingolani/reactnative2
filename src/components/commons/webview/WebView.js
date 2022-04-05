import React from 'react';
import {WebView} from 'react-native-webview';

import Loading from '../loading/Loading';
import styles from '../webview/styles';

const WebViewLayout = ({uri}) => {
  return (
    <WebView
      startInLoadingState={true}
      style={styles.webView}
      renderLoading={() => <Loading />}
      source={{uri}}
    />
  );
};

export default WebViewLayout;
