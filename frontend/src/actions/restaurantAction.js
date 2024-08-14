import {
  ALL_RESTAURANTS_FAIL,
  ALL_RESTAURANTS_REQUEST,
  ALL_RESTAURANTS_SUCCESS,
  SORT_BY_RATINGS,
  SORT_BY_REVIEWS,
  TOGGLE_VEG_ONLY,
} from "../constants/restaurantConstant";

import axios from "axios";

export const getRestaurants = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: ALL_RESTAURANTS_REQUEST });
      let link = `/api/v1/eats/stores`;
      let { data } = await axios.get(link);
      // console.log(data);
      const { restaurants, count } = data;
      dispatch({
        type: ALL_RESTAURANTS_SUCCESS,
        payload: { restaurants, count },
      });
    } catch (error) {
      dispatch({
        type: ALL_RESTAURANTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
};

export const sortByRatings = () => {
  return {
    type: SORT_BY_RATINGS,
  };
};

export const sortByReviews = () => {
  return {
    type: SORT_BY_REVIEWS,
  };
};

export const toggleVegOnly = () => {
  return {
    type: TOGGLE_VEG_ONLY,
  };
};
