import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk";

import {composeWithDevTools} from "redux-devtools-extension"
import { cartReducer, ProductDetailReducer, productReducer } from "./reducers/productReducer.js";
import { adminReducer } from "./reducers/adminReducer.js";
import { enquiryReducer } from "./reducers/enquiryReducer.js";


const reducer=combineReducers({
    products:productReducer,
    Admin:adminReducer,
    cartReducer:cartReducer,
    enquiryReducer:enquiryReducer,
    ProductDetail:ProductDetailReducer,


});
let initialState = {
  cartReducer: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  Admin:localStorage.getItem("admin")?JSON.parse(localStorage.getItem("admin")):[],
  
};

const middleWare=[thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;