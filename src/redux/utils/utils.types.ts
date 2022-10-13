import { IAlert } from '../../components/alerts/alerts.component';

export const enum UtilsActionTypes {
  SET_POP_UP_BOOL = 'SET_POP_UP_BOOL',
  SET_DOMAIN_NAME = 'SET_DOMAIN_NAME',
  ADD_ALERT = 'ADD_ALERT',
  CLOSE_ALERT = 'CLOSE_ALERT',
  DELETE_ALERT = 'DELETE_ALERT',
  INIT_STATE = 'INIT_STATE',
}

interface ISetPopUpBool {
  type: UtilsActionTypes.SET_POP_UP_BOOL;
  payload: boolean;
}

interface ISetDomainName {
  type: UtilsActionTypes.SET_DOMAIN_NAME;
  payload: string;
}

interface IAddAlert {
  type: UtilsActionTypes.ADD_ALERT;
  payload: IAlert;
}

interface ICloseAlert {
  type: UtilsActionTypes.CLOSE_ALERT;
  payload: string;
}

interface IDeleteAlert {
  type: UtilsActionTypes.DELETE_ALERT;
  payload: string;
}

interface IInitState {
  type: UtilsActionTypes.INIT_STATE;
}

export type TUtilsAction =
  | ISetPopUpBool
  | ISetDomainName
  | IAddAlert
  | ICloseAlert
  | IDeleteAlert
  | IInitState;
