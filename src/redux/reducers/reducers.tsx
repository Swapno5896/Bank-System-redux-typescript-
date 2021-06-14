import { Action } from "../actions";
import { ActionType } from "../actionType";


const initSatate = 0;

export const bankReducer = (state: number = initSatate, action: Action) => {
  switch (action.type) {
    case ActionType.WITHDRAW:
      return state - action.payload;

    case ActionType.DEPOSIT:
      return state + action.payload;

    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

