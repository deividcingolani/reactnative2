import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {StoreProvider, useStoreRehydrated} from 'easy-peasy';
import {enableScreens} from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';

enableScreens();

import {store} from './store';
import AppNavigation from './navigations/AppNavigation';

const persistor = persistStore(store);

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  const WaitForStateRehydration = ({children}) => {
    const isRehydrated = useStoreRehydrated();
    return isRehydrated ? children : null;
  };

  return (
    <PersistGate persistor={persistor}>
      <StoreProvider store={store}>
        <WaitForStateRehydration>
          <AppNavigation />
        </WaitForStateRehydration>
      </StoreProvider>
    </PersistGate>
  );
};

export default App;
