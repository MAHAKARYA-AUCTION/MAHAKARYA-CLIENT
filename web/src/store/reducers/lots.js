import {
  SET_COLLECTION,
  SET_LOTS,
  SET_COLLECTIONS,
  SET_LOT,
  SET_WIDE_LOTS,
} from "../actionTypes/global";

const initialState = {
  lots: [],
  lot: {},
  wideLots: null,
  collections: null,
  collection: {},
};

export default function lotsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOTS:
      return {
        ...state,
        lots: action.payload,
      };
    case SET_WIDE_LOTS:
      return {
        ...state,
        wideLots: action.payload,
      };
    case SET_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    case SET_COLLECTION:
      return {
        ...state,
        collection: action.payload,
      };
    case SET_LOT:
      return {
        ...state,
        lot: action.payload,
      };
    default:
      return state;
  }
}
