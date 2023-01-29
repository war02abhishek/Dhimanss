export const adminReducer = (
  state = { user: { isAuthenticated: false } },
  action
) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        loading: true,
        isAuthenticated: false,
      };
    case "LOGIN_SUCCESS":
      // console.log(JSON.stringify(action.payload));
      localStorage.setItem("user", JSON.stringify({ ...action?.payload }));

      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case "LOGIN_FAIL":
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case "LOGOUT_SUCCESS":
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
