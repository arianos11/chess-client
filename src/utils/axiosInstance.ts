import axios from 'axios';

import { setupInterceptorsTo } from './Interceptors';

const axiosApiInstance = setupInterceptorsTo(axios);

// axiosApiInstance.interceptors.request.use(
//   config => {
//     const cb = () => {
//       config.headers['Authorization'] = `Bearer token`;
//       return Promise.resolve(config);
//     }
//   },
//   error => {
//     Promise.reject(error);
//   }
// );

export default axiosApiInstance;
