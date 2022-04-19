import axios from "axios";
import { FETCH_USER_DETAIL } from "../actionTypes/global";
// const baseUrl = "http://localhost:3000";
const baseUrl = "https://api.mahakarya-auction.com";

export const fetchUserDetail = (id) => {
  return async (dispatch) => {
    // console.log(localStorage.getItem("access_token"));
    try {
      const user = await axios.get(`${baseUrl}/users/${id}`, {
        headers: {
          access_token: localStorage.getItem("access_token")
        }
      });
      dispatch(fetchUserDetailAction(user));
    } catch (error) {
      // console.log(error);
    }
  };
};

export function fetchUserDetailAction(payload) {
  return {
    type: FETCH_USER_DETAIL,
    payload
  };
}

export const doRegister = (payload) => {
  return (dispatch) => {
    return axios.post(`${baseUrl}/users/register`, payload);
  };
};

export const doLogin = (payload) => {
  return (dispatch) => {
    return axios.post(`${baseUrl}/users/login`, payload);
  };
};
