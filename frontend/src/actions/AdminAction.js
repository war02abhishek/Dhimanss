import axios from "axios";

export const login = (email, password, navigate) => async (dispatch,getState) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });

    const { data } = await axios.post(`/api/v1/login`, { email, password });
    console.log(data);

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data,
    });
    localStorage.setItem("admin", JSON.stringify(getState().Admin));
    navigate("/");
  } catch (error) {
    dispatch({
      type: "LOGIN_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const logout = () => async (dispatch,navigate) => {
  try {
    await axios.get(`/api/v1/logout`);

    dispatch({ type: "LOGOUT_SUCCESS" });
    localStorage.removeItem("admin");
    navigate('/')
  } catch (error) {
    dispatch({ type: "LOGOUT_FAIL", payload: error.response.data.message });
  }
};