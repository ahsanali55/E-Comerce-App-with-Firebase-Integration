import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    stockFull: false,
    isfetch: true,
    productItem: JSON.parse(localStorage?.getItem("products")) || [],
  },
  reducers: {
    fetchedData: (state, action) => {
      // console.log(action.payload);
      state.isfetch = false;
      state.productItem = action.payload;
      localStorage.setItem("products", JSON.stringify(action.payload)); 
    },
    disableButtom: (state, action) => {
   
      const updatedState = {
              ...state,
        productItem:  state.productItem.map((item) =>
        item.id === action.payload.id ? { ...item, addToCart: true } : item
      )
    }

      localStorage.setItem("products", JSON.stringify(updatedState.productItem));
      return updatedState;
    },
    enableButton: (state, action) => {
      const updatedState = {
        ...state,
        productItem: state.productItem.map((item) =>
          item.id === action.payload.id ? { ...item, addToCart: false } : item
      )
    }
      localStorage.setItem("products", JSON.stringify(updatedState.productItem));
      return updatedState;
    },
    increment: (state, action) => {
      if (action.payload.quantity <= action.payload.stock){
        localStorage.removeItem("alert_shown");
      }
      const updatedState = {
        ...state, 
        stockFull: (action.payload.quantity < action.payload.stock) ? (state.stockFull ): !state.stockFull,
        productItem:  state.productItem.map((product) =>
        (product.id === action.payload.id) && (product.quantity < product.stock)
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
      }
      localStorage.setItem("products", JSON.stringify(updatedState.productItem));
      return updatedState;
    },
    decrement: (state, action) => {
      console.log("Decrement Click", action.payload);

      if (action.payload.quantity <= action.payload.stock){
        localStorage.removeItem("alert_shown");
      }

      const updatedState = {
        ... state,
        stockFull: (action.payload.quantity > action.payload.stock) && false,
        productItem: state.productItem.map((product) =>
          (product.id === action.payload.id) && (product.quantity > 1)
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      }
      localStorage.setItem('products', JSON.stringify(updatedState.productItem));
      return updatedState;
    },
  },
});

export const ProductAction = productSlice.actions;
export default productSlice.reducer;
