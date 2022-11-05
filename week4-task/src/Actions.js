import * as ActionType from "./ActionType";

export const addScoreToStore = val => {
  return {
    type: ActionType.ADD_SCORE,
    payload: val
  }
}

export const delScoreFromStore = val => {
  return {
    type: ActionType.DEL_SCORE,
    payload: val
  }
}