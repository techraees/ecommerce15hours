import axios from "axios";

import {
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  ALL_PRODUCTS_FAIL,
  ALL_DETAILS_REQUEST,
  ALL_DETAILS_SUCCESS,
  ALL_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

// Get All Products
export const getProduct =
  (
    keyword = "",
    currentPage = 1,
    price = [0, 2500],
    category = "all",
    ratingsArray
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCTS_REQUEST });

      let url1 = `http://localhost:4000/api/v1/products?keyword=${keyword}`;
      let url = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratingsArray[0]}&ratings[lte]=${ratingsArray[1]}`;

      if (category == "all") {
        url = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratingsArray[0]}&ratings[lte]=${ratingsArray[1]}`;
      } else if (category) {
        url = `http://localhost:4000/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&ratings[gte]=${ratingsArray[0]}&ratings[lte]=${ratingsArray[1]}`;
      }

      console.log(url);
      const { data } = await axios.get(url);
      dispatch({ type: ALL_PRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
// Get Product Details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:4000/api/v1/product/${id}`
    );
    dispatch({ type: ALL_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ALL_DETAILS_FAIL,
      payload: error.response.data.message || error,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
