import { SET_IS_LOADING, SET_ERROR } from "../actionTypes/global";

import { FETCH_USER_DETAIL } from "../actionTypes/global";

const initialState = {
  isLoading: false,
  error: {
    isError: false,
    type: "error",
    message: "",
  },
  userById: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case FETCH_USER_DETAIL:
      return {
        ...state,
        userById: action.payload,
      };
    default:
      return state;
  }
}
