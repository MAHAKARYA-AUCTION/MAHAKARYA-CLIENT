import {
    SET_IS_LOADING,
    SET_ERROR
} from "../actionTypes/global";

export function setIsLoading(isLoading) {
    return {
        type: SET_IS_LOADING,
        payload: isLoading
    }
}

export function setError(error) {
    return {
        type: SET_ERROR,
        payload: error ? error : { isError: false, type: "error", message: "Internal server error" }
    }
}