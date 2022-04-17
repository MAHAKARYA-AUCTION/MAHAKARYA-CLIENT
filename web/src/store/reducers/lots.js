import { SET_LOTS } from "../actionTypes/global";
import { SET_COLLECTIONS } from "../actionTypes/global";

const initialState = {
  lots: null,
  collections: null,
};

export default function lotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOTS:
      return {
        ...state,
        lots: action.payload,
      };
    case SET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
}
