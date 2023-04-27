import * as actionTypes from "../action.types/converterTypes";
import { IConverterAction } from "../../interfaces";

const initialState = {
  primary: 0,
};

const converterReducer = (state = initialState, action: IConverterAction) => {
    {console.log(action)}
    
  switch (action.type) {
    case actionTypes.SET_COUNT:
      return {
        ...state,
        primary: action.payload,
      };
    default:
        return state
  }
};

export default converterReducer;
