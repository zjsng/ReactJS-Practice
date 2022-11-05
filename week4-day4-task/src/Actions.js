import * as ActionType from "./ActionType";

export const updateArrayOfObject = val => {
  return {
    type: ActionType.UPD,
    payload: val
  }
}