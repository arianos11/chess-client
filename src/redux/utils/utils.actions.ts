import { UtilsActionTypes } from './utils.types';

import { IAlert } from '../../components/alerts/alerts.component';
import { IUtilsState } from './utils.reducer';

export const setPopUpBool = (popup: boolean) => ({
  type: UtilsActionTypes.SET_POP_UP_BOOL,
  payload: popup,
});

export const setDomainName = (domainName: string) => ({
  type: UtilsActionTypes.SET_DOMAIN_NAME,
  payload: domainName,
});

export const addAlert = (alert: IAlert) => ({
  type: UtilsActionTypes.ADD_ALERT,
  payload: alert,
});

export const closeAlert = (id: string) => ({
  type: UtilsActionTypes.CLOSE_ALERT,
  payload: id,
});

export const deleteAlert = (id: string) => ({
  type: UtilsActionTypes.DELETE_ALERT,
  payload: id,
});

export const initState = (state: IUtilsState) => ({
  type: UtilsActionTypes.INIT_STATE,
  payload: state,
});
