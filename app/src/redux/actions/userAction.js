import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  REGISTER_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_FAIL,
  LOGOUT_USER_FAIL,
} from "../constants/userConstants";
import axios from "axios";

// lOGIN USER ACTION
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = { headers: { "Content-type": "application/json" } };

    // const { data } = await axios.post(
    //   "/api/v1/login",
    //   { email, password },
    //   config
    // );

    const { data } = await axios.post(
      "http://localhost:4000/api/v1/login",
      { email, password },
      config
    );

    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

// REGISTER USER ACTION
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });

    const config = { headers: { "Content-type": "multipart/form-data" } };

    // const { data } = await axios.post("/api/v1/register", userData, config);
    const { data } = await axios.post(
      "http://localhost:4000/api/v1/register",
      userData,
      config
    );
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// LOAD USER ACTION
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });

    // const { data } = await axios.get("api/v1/me");
    const { data } = await axios.get("http://localhost:4000/api/v1/me");

    dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};

// LOGOUT USER ACTION
export const logoutUser = () => async (dispatch) => {
  try {
    // await axios.get("api/v1/logout");
    await axios.get("http://localhost:4000/api/v1/logout");

    dispatch({ type: LOAD_USER_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_USER_FAIL, payload: error.response.data.message });
  }
};

// UPDATE PROFILE USER ACTION
export const updateProfile = (userData) => async (dispatch) => {
  try {
    userData = {
      name: userData,
      email: "ranaraees1223@gmail.com",
    };
    dispatch({ type: UPDATE_PROFILE_REQUEST });

    const config = { headers: { "Content-type": "application/json" } };
    // const { data } = await axios.put("/api/v1//me/update", userData, config);
    const { data } = await axios.put(
      "http://localhost:4000/api/v1//me/update",
      userData,
      config
    );
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
