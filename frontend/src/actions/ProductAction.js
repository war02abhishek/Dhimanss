import axios from 'axios'

export const getAllProducts=()=>async(dispatch)=>{

    try {
        dispatch({type:'ALL_PRODUCT_REQUEST'});

        const {data}=await axios.get(`/api/v1/products`);
        console.log(data)
        dispatch({
          type: "ALL_PRODUCT_SUCCESS",
          payload: data,
        });
        
    } catch (error) {
          dispatch({
            type: 'ALL_PRODUCT_FAILURE',
            payload: error.response.data.message,
          });     
    }
}

export const createProduct=(productData,navigate)=>async (dispatch)=>{
try {
  console.log(productData);
  dispatch({ type: "NEW_PRODUCT_REQUEST" });

  const config = {
    headers: { "Content-Type": "application/json" },
  };

  const { data } = await axios.post(`/api/v1/product/new`, productData, config);
  console.log(data);
  navigate('/')

  dispatch({
    type: "NEW_PRODUCT_SUCCESS",
    payload: data,
  });
} catch (error) {
  dispatch({
    type: "NEW_PRODUCT_FAIL",
    payload: error.response.data.message,
  });
}


}


export const addItemsToCart =
  (id) => async (dispatch, getState) => {
    try {
      console.log("Addd items to acart ");
      const { data } = await axios.get(`/api/v1/product/${id}`);
      // localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
      console.log(data);
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          product: data.product._id,
          id:data.product.id,
          name: data.product.name,
          moq: data.product.moq,
          dimensions: data.product.dimensions,
          weight: data.product.weight,
          price: data.product.price,
          image: data.product.images[0],  
        },
      });

      //code to add in existing local storage array

      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartReducer.cartItems)
      );
    
    } catch (error) {
      console.log(error.message);
    }
  };

  // Remove from cart
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: "REMOVE_CART_ITEM",
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cartReducer.cartItems));
};


export const updateProduct = (id, productData) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_PRODUCT_REQUEST" });
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.put(
      `/api/v1/product/${id}`,
      productData,
      config
    );
    dispatch({ type: "UPDATE_PRODUCT_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "UPDATE_PRODUCT_FAIL",
      payload: error.response.data.message,
    });
  }
};
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_PRODUCT_REQUEST" });

    const { data } = await axios.delete(`/api/v1/product/${id}`);

    dispatch({ type: "DELETE_PRODUCT_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "DELETE_PRODUCT_FAIL",
      payload: error.response.data.message,
    });
  }
};

export const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAIL_REQUEST" });
    const { data } = await axios.get(`/api/v1/product/${id}`);
    console.log(data);
    
      dispatch({
        type: "PRODUCT_DETAIL_SUCESS",
        payload: {
          product: data.product._id,
          id:data.product.id,
          name: data.product.name,
          moq: data.product.moq,
          description:data.product.description,
          dimensions: data.product.dimensions,
          weight: data.product.weight,
          price: data.product.price,
          image: data.product.images[0],  
        },
  })}
   catch (error) {
    dispatch({
      type: "PRODUCT_DETAIL_FAIL",
      payload: error.response.data.message,
    });
  }
};