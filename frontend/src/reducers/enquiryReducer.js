export const enquiryReducer = (state = { enquiry: [] }, action) => {
  switch (action.type) {
    case "ALL_ENQUIRY_REQUEST":
    case "ADMIN_ENQUIRY_REQUEST":
      return {
        loading: true,
        enquiry: [],
      };

    case "ALL_ENQUIRY_SUCCESS":
      console.log(action.payload);
      return {
        loading: false,
        enquiry: action.payload.enq,
       
      };
    case "ALL_ENQUIRY_FAILURE":
      return {
        loading: false,
        error: action.payload,
      };
    case "CLEAR_ERRORS":
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
