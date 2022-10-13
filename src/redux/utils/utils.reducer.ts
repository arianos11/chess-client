/* eslint-disable @typescript-eslint/default-param-last */

import { UtilsActionTypes, TUtilsAction } from './utils.types';
import { IAlert } from '../../components/alerts/alerts.component';

const INITIAL_STATE = {
  popUpBool: false,
  pointOfSale: 1,
  domainName: 'http://localhost:8000',
  alerts: [],
};

export interface IUtilsState {
  popUpBool: boolean;
  pointOfSale: number;
  domainName: string;
  alerts: IAlert[];
}

const utilsReducer = (
  state: IUtilsState = INITIAL_STATE,
  action: TUtilsAction,
) => {
  switch (action.type) {
    case UtilsActionTypes.SET_POP_UP_BOOL:
      return {
        ...state,
        popUpBool: action.payload,
      };
    case UtilsActionTypes.SET_DOMAIN_NAME:
      return {
        ...state,
        domainName: action.payload,
      };
    case UtilsActionTypes.ADD_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      };
    case UtilsActionTypes.CLOSE_ALERT:
      const tempAlerts = state.alerts.map((alert) => {
        if (alert.id === action.payload) {
          return {
            ...alert,
            open: false,
          };
        }
        return alert;
      });
      return {
        ...state,
        alerts: [...tempAlerts],
      };
    case UtilsActionTypes.DELETE_ALERT:
      return {
        alerts: [
          ...state.alerts.filter((alert) => alert.id !== action.payload),
        ],
      };
    case UtilsActionTypes.INIT_STATE:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default utilsReducer;
