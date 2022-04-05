import {createStore} from 'easy-peasy';
import {persistReducer} from 'redux-persist';

import storeModel from './models';
import {apiOmv} from '../services';
import {storage} from '../lib/utils';

export const store = createStore(storeModel, {
  injections: {
    omv: apiOmv,
  },
  reducerEnhancer: reducer =>
    persistReducer(
      {
        key: 'auth',
        storage,
        whitelist: ['auth', 'common'],
      },
      reducer,
    ),
});
