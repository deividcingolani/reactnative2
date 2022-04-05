import {action, thunk} from 'easy-peasy';

import {setToken} from '../lib/utils';
import {User} from '../models';

export const authModel = {
  // States
  user: new User({}),
  // Actions
  setUser: action((state, payload) => {
    state.user = new User(payload);
  }),
  signing: thunk(async (actions, payload, {injections, getStoreActions}) => {
    const {omv} = injections;
    const {common} = getStoreActions();

    try {
      common.setLoading(true);
      const {data} = await omv.login(payload);

      setToken(data.token);
      actions.setUser({
        token: data.token,
        authenticated: !!data.token,
        info: data,
      });
      common.setLoading(false);
    } catch (error) {
      common.setLoading(false);
      common.setError(
        error.data?.error?.message ||
          'Error desconocido. Contacte al administrador para mayor información.',
      );
    }
  }),
  signOut: thunk(async (actions, payload, {injections, getStoreActions}) => {
    const {common} = getStoreActions();

    try {
      setToken(null);
      common.setLoading(true);
      actions.setUser({
        token: null,
        authenticated: false,
        info: null,
      });
      common.setLoading(false);
    } catch (error) {
      common.setLoading(false);
      common.setError(
        error.data?.error?.message ||
          'Error desconocido. Contacte al administrador para mayor información.',
      );
    }
  }),
  updateProfile: thunk(
    async (actions, payload, {injections, getStoreActions, getState}) => {
      const {omv} = injections;
      const {common} = getStoreActions();
      const {user} = getState();

      try {
        setToken(user.token);
        common.setLoading(true);
        const {data} = await omv.updateProfile({...payload, id: payload._id});
        const {listOfServices} = user.info;
        
        user.info = {...data, 'services': listOfServices};

        actions.setUser({
          token: user.token,
          authenticated: !!user.token,
          info: user.info,
        });
        
        common.setSuccess('Datos modificados con éxito');
        common.setLoading(false);
      } catch (error) {
        common.setLoading(false);
        common.setError(
          error.data?.error?.message ||
            'Error desconocido. Contacte al administrador para mayor información.',
        );
      }
    },
  ),
};
