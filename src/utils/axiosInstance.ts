import axios from 'axios';

import { setupInterceptorsTo } from './Interceptors';

const axiosApiInstance = setupInterceptorsTo(axios);

export default axiosApiInstance;
