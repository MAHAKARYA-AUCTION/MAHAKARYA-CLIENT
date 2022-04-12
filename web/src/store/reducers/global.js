import {
    SET_IS_LOADING,
    SET_ERROR
} from "../actionTypes/global";

const initialState = {
    isLoading: false,
    error: {
        isError: false,
        type: "error",
        message: ""
    }
}

export default function globalReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}