import axios from "axios";
import { SET_IS_LOADING, SET_ERROR, SET_LOTS } from "../actionTypes/global";
// const BASE_URL = "http://localhost:3000/";
const BASE_URL = "https://api.mahakarya-auction.com/";

export function setIsLoading(isLoading) {
  return {
    type: SET_IS_LOADING,
    payload: isLoading,
  };
}

export function setError(error) {
  return {
    type: SET_ERROR,
    payload: error
      ? error
      : { isError: false, type: "error", message: "Internal server error" },
  };
}
