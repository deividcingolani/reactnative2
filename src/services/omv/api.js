import axios from 'axios';
import {handleError} from '../handleError';
import {DEV, OMV_URL_TEST, OMV_URL} from '@env';

const getRootUrl = () => (DEV === 'true' ? OMV_URL_TEST : OMV_URL);

export const apiCall = async (method, path, data, formData = false) => {
  return new Promise(async (resolve, reject) => {
    axios.defaults.baseURL = getRootUrl();
    /*
    console.log();
    console.log();
    console.debug(
      'axios.defaults.headers.common.Authorization ::: ',
      axios.defaults.headers.common.Authorization,
    );*/
    // console.debug(
    //   'axios.defaults.baseURL ::: ',
    //   `${axios.defaults.baseURL}${path}`,
    // );
    // console.debug('request data ::: ', data);
    
    return axios[method.toLowerCase()](path, data)
      .then(res => resolve(res))
      .catch(err => reject(handleError(err)));
  });
};
