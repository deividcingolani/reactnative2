import {apiCall} from './api';

// Auth
const login = data => apiCall('POST', 'api/v2/vida-users/userLogin', data);

// Service
const createQueue = data => apiCall('POST', 'api/vida-queue/', data);
const endCall = data => apiCall('POST', 'api/v2/vida-calls/endcall', data);
const requestService = (data, formData) =>
  apiCall('POST', 'api/v2/vida-requests/', data);

// Profile
const updateProfile = data =>
  apiCall('POST', 'api/v2/vida-users/userUpdate', data);

export default {login, createQueue, endCall, requestService, updateProfile};
