import axios from "axios";
import {
  SET_LOTS,
  SET_COLLECTIONS,
  SET_COLLECTION,
  SET_LOT,
  SET_WIDE_LOTS,
} from "../actionTypes/global";
// const BASE_URL = "http://localhost:3000/";
const BASE_URL = "https://api.mahakarya-auction.com/";

export const fetchLots = () => {
  return async (dispatch) => {
    const data = await axios.get(BASE_URL + "lots");
    dispatch({ type: SET_LOTS, payload: data });
  };
};

export const fetchWideLots = () => {
  return async (dispatch) => {
    const { data } = await axios.get(BASE_URL + "lots");
    const wideData = await data.filter((e) => e.width > e.height);
    await dispatch({
      type: SET_WIDE_LOTS,
      payload: wideData,
    });
  };
};

export const fetchLotsByCollectionId = ({ id: collectionId, filter }) => {
  return async (dispatch) => {
    const data = await axios.get(
      BASE_URL + "lots/collections/" + collectionId,
      {
        params: filter,
      }
    );
    dispatch({ type: SET_LOTS, payload: data.data });
  };
};

export const fetchCollections = () => {
  return async (dispatch) => {
    const data = await axios.get(BASE_URL + "collections");
    // console.log(data);
    dispatch({ type: SET_COLLECTIONS, payload: data.data });
  };
};

export const fetchCollection = (id) => {
  return async (dispatch) => {
    const data = await axios.get(BASE_URL + "collections/" + id);
    dispatch({ type: SET_COLLECTION, payload: data.data });
  };
};

export const fetchLotById = (id) => {
  return async (dispatch) => {
    const data = await axios.get(BASE_URL + "lots/" + id);
    dispatch({ type: SET_LOT, payload: data.data });
  };
};

export const bidByLotId = async (id, sum) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}bid/${id}`,
      { userId: localStorage.getItem("id"), sum: sum },
      {
        method: "POST",
        headers: {
          access_token: localStorage.access_token,
        },
      }
    );
    return { isSuccess: true, data: data };
  } catch (error) {
    return { isSuccess: false, data: error.response.data.msg };
  }
};
