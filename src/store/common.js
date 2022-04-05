import {action, thunk} from 'easy-peasy';
import {globalStyles} from '../assets/styles/global';

export const commonModel = {
  // State
  loading: false,
  loadingMsg: '',
  orientation: 'portrait', // or landscape
  connected: true,
  error: null,
  success: null,
  theme: 'light', // or dark
  globalStyles: globalStyles.landscape,
  // Action
  setLoading: action((state, payload) => {
    const {msg, value} = payload;
    state.loading = value || payload;
    state.loadingMsg = msg;
  }),
  setOrientation: action((state, payload) => {
    // console.log('payload ::: ', payload);
    // console.log('payload global styles ::: ', globalStyles[payload]);
    state.orientation = payload;
    state.globalStyles = globalStyles[payload];
  }),
  setConnected: action((state, payload) => {
    state.connected = payload;
  }),
  setError: action((state, payload) => {
    state.error = payload;
  }),
  setSuccess: action((state, payload) => {
    state.success = payload;
  }),
  setTheme: action((state, payload) => {
    state.theme = payload;
  }),
  toggleTheme: thunk(async (actions, payload) => {
    actions.setTheme(payload);
  }),
};
