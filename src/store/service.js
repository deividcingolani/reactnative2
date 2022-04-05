import {action, thunk} from 'easy-peasy';

import {Queue} from '../models';
import {navigate, popToTop} from '../navigations/navigation';
import {setToken} from '../lib/utils';

export const serviceModel = {
  // State
  queue: new Queue({}),
  reason: '',
  symptoms: '',
  insuranceCode: 30,
  idPatient: '',
  connectionLost: false,
  // Action
  setQueue: action((state, payload) => {
    state.queue = new Queue(payload);
  }),
  setReason: action((state, payload) => {
    state.reason = payload;
  }),
  setSymptoms: action((state, payload) => {
    state.symptoms = payload;
  }),
  setInsuranceCode: action((state, payload) => {
    state.insuranceCode = payload;
  }),
  setIdPatient: action((state, payload) => {
    state.idPatient = payload;
  }),
  setConnectionLost: action((state, payload) => {
    state.connectionLost = payload;
  }),
  createQueue: thunk(
    async (actions, payload, {injections, getStoreActions, getStoreState}) => {
      const {
        auth: {
          user: {token},
        },
      } = getStoreState();
      const {omv} = injections;
      const {common} = getStoreActions();

      try {
        setToken(token);
        console.log('payload ::: ', payload);
        if (payload.redirect) {
          actions.setIdPatient(payload.patient_id);
          actions.setReason(payload.reason);
          actions.setSymptoms(payload.symptoms);
          actions.setInsuranceCode(payload.insurance_code);
          common.setLoading(true);
        }

        const interval = payload.interval;
        const connectionLost = payload.connectionLost;
        const params = {...payload};

        delete params.interval;
        delete params.connectionLost;

        if (connectionLost) {
          await omv.endCall({patient_id: params.idPatient});
          actions.setConnectionLost(false);
        }
        console.log('params ::: ', params);
        const {data} = await omv.createQueue(params);
        console.log('data ::: ', data);
        common.setLoading(false);

        if (data.connection?.api) {
          actions.setQueue(data);
          clearInterval(interval);
          navigate('video_call');
        }

        if (payload.redirect) {
          navigate('waiting_room');
        }
      } catch (error) {
        console.log(error);
        common.setLoading(false);
        common.setError(
          error.data?.error?.message ||
            'Error desconocido. Contacte al administrador para mayor información.',
        );
      }
    },
  ),
  requestService: thunk(
    async (actions, payload, {injections, getStoreActions, getStoreState}) => {
      const {
        auth: {
          user: {token},
        },
      } = getStoreState();
      const {omv} = injections;
      const {common} = getStoreActions();

      try {
        setToken(token);
        common.setLoading(true);
        await omv.requestService(payload.fields);
        common.setLoading(false);
        payload.callback();
        common.setSuccess('Servicio solicitado con éxito');
      } catch (error) {
        console.log('SERVICE ERROR ::: ', error);
        common.setLoading(false);
        common.setError(
          error.data?.error?.message ||
            'Error desconocido. Contacte al administrador para mayor información.',
        );
      }
    },
  ),
  endCall: thunk(async (actions, payload, {injections, getStoreActions}) => {
    const {omv} = injections;
    const {common} = getStoreActions();

    try {
      const params = {...payload};
      common.setLoading(true);
      await omv.endCall(params);
      common.setLoading(false);
      popToTop();
    } catch (error) {
      common.setLoading(false);
      common.setError(
        error.data?.error?.message ||
          'Error desconocido. Contacte al administrador para mayor información.',
      );
    }
  }),
};
