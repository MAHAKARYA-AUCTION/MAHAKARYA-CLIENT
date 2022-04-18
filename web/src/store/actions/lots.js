import axios from "axios";
import { SET_LOTS, SET_COLLECTIONS, SET_COLLECTION } from "../actionTypes/global";
// const BASE_URL = "http://localhost:3000/";
const BASE_URL = "https://api.mahakarya-auction.com/";

export const fetchLots = () => {
  return async (dispatch) => {
    const data = await axios.get(BASE_URL + "lots");
    dispatch({ type: SET_LOTS, payload: data });
  };
};

export const fetchLotsByCollectionId = ({ id: collectionId, filter }) => {
  return async (dispatch) => {
    const data = await axios.get(BASE_URL + "lots/collections/" + collectionId, {
      params: filter,
    });
    dispatch({ type: SET_LOTS, payload: data.data });
  }
}

export const fetchCollections = () => {
  return async (dispatch) => {
    const data = await axios.get(BASE_URL + "collections");
    dispatch({ type: SET_COLLECTIONS, payload: data.data });
  };
};

export const fetchCollection = (id) => {
  return async (dispatch) => {
    const data = await axios.get(BASE_URL + "collections/" + id);
    dispatch({ type: SET_COLLECTION, payload: data.data });
  }
}




