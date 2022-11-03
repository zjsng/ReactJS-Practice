import * as actions from "./ActionType";

export const updateArrayOfObject = val => {
  return {
    type: actions.UPD,
    payload: val
  }
}