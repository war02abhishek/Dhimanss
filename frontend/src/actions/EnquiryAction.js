import axios from "axios";

export const getAllEnquiry = () => async (dispatch) => {
  try {
    dispatch({ type: "ALL_ENQUIRY_REQUEST" });

    const { data } = await axios.get(`/api/v1/allEnquiry`);
    console.log(data);
    dispatch({
      type: "ALL_ENQUIRY_SUCCESS",
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: "ALL_ENQUIRY_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export const createEnquiry=(enquiryData)=>async(dispatch)=>{

   try {
     dispatch({ type: "CREATE_ENQUIRY_REQUEST" });
      const config = {
        headers: { "Content-Type": "application/json" },
      };

     const { data } = await axios.post(`/api/v1/newEnquiry`, enquiryData,config);
     console.log(data);
     dispatch({
       type: "CREATE_ENQUIRY_SUCCESS",
       payload: data,
     });
   } catch (error) {
     dispatch({
       type: "CREATE_ENQUIRY_FAILURE",
       payload: error.response.data.message,
     });
   }
}
export const deleteEnquiry = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_ENQUIRY_REQUEST" });

    const { data } = await axios.delete(`/api/v1/deleteEnquiry/${id}`);

    dispatch({ type: "DELETE_ENQUIRY_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "DELETE_ENQUIRY_FAIL",
      payload: error.response.data.message,
    });
  }
};