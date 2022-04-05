import React from 'react';
import {View, ScrollView} from 'react-native';
import {useStoreActions, useStoreState} from 'easy-peasy';
import {Button} from '@ui-kitten/components';
import WebViewLayout from '../../../components/commons/webview/WebView';
import {privacyStyles} from '../../owner/attention/styles';

import {Container, Content} from '../../../components';
import styles from '../../../components/commons/loading/styles';

const PrivacyWebView = (props) => {
  const navigation = props;
  const termsCallback = navigation.route.params.termsCallback;

    return (
      <Container customStyles={{backgroundColor: 'white'}}>
        <Content customStyles={{ flex: 1}}>
            <WebViewLayout automaticallyAdjustContentInsets={false} uri='https://contactamed.com/termsandconditions.php'/>
        </Content>
          <Button  
            size='giant' 
            onPress={termsCallback}
            style={privacyStyles.privacyButton} 
            status='warning'
            > Aceptar Términos y Condiciones </Button>
      </Container>
    );

};

export default PrivacyWebView;