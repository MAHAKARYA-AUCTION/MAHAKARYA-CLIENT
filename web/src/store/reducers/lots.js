import { SET_COLLECTION, SET_LOTS } from "../actionTypes/global";
import { SET_COLLECTIONS } from "../actionTypes/global";

const initialState = {
  lots: [],
  collections: null,
  collection: {}
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
    case SET_COLLECTION:
      return {
        ...state,
        collection: action.payload
      }
    default:
      return state;
  }
}
