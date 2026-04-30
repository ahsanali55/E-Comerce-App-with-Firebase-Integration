import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProductItem, ProductState } from "./types";

const storedProducts = localStorage.getItem("products");
const initialState: ProductState = {
  stockFull: false,
  isfetch: true,
  productItem: storedProducts ? JSON.parse(storedProducts) : [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchedData: (state, action: PayloadAction<ProductItem[]>) => {
      // console.log(action.payload);
      state.isfetch = false;
      state.productItem = action.payload;
      localStorage.setItem("products", JSON.stringify(action.payload)); 
    },
    disableButtom: (state, action: PayloadAction<ProductItem>) => {
   
      const updatedState = {
              ...state,
        productItem:  state.productItem.map((item: ProductItem) =>
        item.id === action.payload.id ? { ...item, addToCart: true } : item
      )
    }

      localStorage.setItem("products", JSON.stringify(updatedState.productItem));
      return updatedState;
    },
    enableButton: (state, action: PayloadAction<ProductItem>) => {
      const updatedState = {
        ...state,
        productItem: state.productItem.map((item: ProductItem) =>
          item.id === action.payload.id ? { ...item, addToCart: false } : item
      )
    }
      localStorage.setItem("products", JSON.stringify(updatedState.productItem));
      return updatedState;
    },
    increment: (state, action: PayloadAction<ProductItem>) => {
      if (action.payload.quantity <= action.payload.stock){
        localStorage.removeItem("alert_shown");
      }
      const updatedState = {
        ...state, 
        stockFull: (action.payload.quantity < action.payload.stock) ? (state.stockFull ): !state.stockFull,
        productItem:  state.productItem.map((product: ProductItem) =>
        (product.id === action.payload.id) && (product.quantity < product.stock)
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
      }
      localStorage.setItem("products", JSON.stringify(updatedState.productItem));
      return updatedState;
    },
    decrement: (state, action: PayloadAction<ProductItem>) => {
      console.log("Decrement Click", action.payload);

      if (action.payload.quantity <= action.payload.stock){
        localStorage.removeItem("alert_shown");
      }

      const updatedState = {
        ... state,
        stockFull: (action.payload.quantity > action.payload.stock) && false,
        productItem: state.productItem.map((product: ProductItem) =>
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

