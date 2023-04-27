import * as acitonTypes from "../action.types/converterTypes";

export const setPrimary = (paylod: number) => ({
  type: acitonTypes.SET_COUNT,
  paylod,
});
