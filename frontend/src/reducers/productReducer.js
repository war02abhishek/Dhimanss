export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "ALL_PRODUCT_REQUEST":
    case "ADMIN_PRODUCT_REQUEST":
      return {
        loading: true,
        products: [],
      };

    case "ALL_PRODUCT_SUCCESS":
      console.log(action.payload);
      return {
        loading: false,
        products: action.payload.Products,
        productsCount: action.payload.productsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredProductsCount: action.payload.filteredProductsCount,
      };
    case "ALL_PRODUCT_FAILURE":
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

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      console.log(state);
      console.log(state.cartItems);

      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );
      console.log(isItemExist);
      if (isItemExist) {
        console.log("isItem Exist is True");

        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cartItems: state.cartItems?.filter((i) => i.product !== action.payload),
      };
    default:
      return state;
  }
};

export const ProductDetailReducer = (state = { ProductDetail: [] }, action) => {
  {
    switch (action.type) {
      case "PRODUCT_DETAIL_REQUEST":
        return {
          loading: true,
          ProductDetail: [],
        };

      case "PRODUCT_DETAIL_SUCESS":
        return {
          ...state,
          ProductDetail: action.payload,
          loading: false,
        };

      default:
        return state;
    }
  }
};
