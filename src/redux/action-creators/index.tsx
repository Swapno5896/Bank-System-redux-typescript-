import { Dispatch } from "react"
import { Action } from "../actions"
import { ActionType } from "../actionType"

export const dipositMoney = (ammount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: ammount
        })
    }
}
export const withdrewMoney = (ammount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: ammount
        })
    }
}

export const bankruptMoney = (ammount: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUPT
        })
    }
}