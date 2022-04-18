import axios from "axios";
import { SET_LOTS, SET_COLLECTIONS } from "../actionTypes/global";
// const BASE_URL = "http://localhost:3000/";
const BASE_URL = "https://api.mahakarya-auction.com/";

export const fetchLots = () => {
  return async (dispatch) => {
    const data = await axios.get(BASE_URL + "lots");
    dispatch({ type: SET_LOTS, payload: data });
  };
};

export const fetchCollections = () => {
  return async (dispatch) => {
    const data = await axios.get(BASE_URL + "collections");
    console.log(data);
    dispatch({ type: SET_COLLECTIONS, payload: data.data });
  };
};
