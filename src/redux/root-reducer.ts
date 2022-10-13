import { combineReducers } from 'redux';

import utilsReducer from './utils/utils.reducer';

const reducers = combineReducers({
  utils: utilsReducer,
});

export default reducers;

export type TState = ReturnType<typeof reducers>;
