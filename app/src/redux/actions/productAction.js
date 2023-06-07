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
export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });

    const { data } = await axios.get("http://localhost:4000/api/v1/products");
    dispatch({ type: ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ALL_PRODUCTS_FAIL, payload: error.response.data.message });
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
