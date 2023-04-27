import * as actionTypes from "../action.types/countTypes";

const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.COUNT_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionTypes.COUNT_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case actionTypes.COUNT_INCREMENT_NUMBER:
      return {
        ...state,
        count: state.count + Number(action.paylod),
      };
    case actionTypes.COUNT_DECREMENT_NUMBER:
      return {
        ...state,
        count: state.count - Number(action.paylod),
      };
    case actionTypes.COUNT_RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export default countReducer;
