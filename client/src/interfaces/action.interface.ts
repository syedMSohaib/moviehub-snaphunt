import { Action } from 'redux';
import { ActionType } from '../enumerations/action-type';

export interface IAction extends Action<string> {
  type: ActionType|any;
  payload: any;
}
