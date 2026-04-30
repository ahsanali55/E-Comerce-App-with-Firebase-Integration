import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartState, ProductItem } from "./types";

const storedSummary = localStorage.getItem("summary");
const storedCartItems = localStorage.getItem("cartItems");

const initialState: CartState = {
  summarySubTotalPrice: storedSummary ? JSON.parse(storedSummary) : 0,
  cartItem: storedCartItems ? JSON.parse(storedCartItems) : [],
  stockFull: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCArt: (state, action: PayloadAction<ProductItem>) => {
      console.log("Item at Cart: ", action.payload);
      const isExisting = state.cartItem.find(
        (item: ProductItem) => item.id === action.payload.id
      );
      if (!isExisting) {
        const updatedState = {
          ...state,
          summarySubTotalPrice:
            state.summarySubTotalPrice +
            action.payload.price * action.payload.quantity,
          cartItem: [
            {
              ...action.payload,
              addToCart: true,
              price: action.payload.basePrice * action.payload.quantity,
            },
            ...state.cartItem,
          ],
        };
        localStorage.setItem("cartItems", JSON.stringify(updatedState.cartItem));
        localStorage.setItem("summary", JSON.stringify(updatedState.summarySubTotalPrice));

        return updatedState;
      }
      localStorage.setItem("summary", JSON.stringify(state.summarySubTotalPrice));
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    removeItemFromCArt: (state, action: PayloadAction<ProductItem>) => {
      //   console.log(action.payload);
      const newCartItems = state.cartItem.filter(
        (item: ProductItem) => item.id !== action.payload.id
      );

      if (newCartItems) {
        const updatedState = {
          ...state,
          summarySubTotalPrice: newCartItems.reduce(
            (sum: number, item: ProductItem) => sum + item.price,
            0
          ),
          cartItem: newCartItems,
        };
        localStorage.setItem("summary", JSON.stringify(updatedState.summarySubTotalPrice));
        localStorage.setItem("cartItems",JSON.stringify(updatedState.cartItem));

        return updatedState;
      }
    },
    incrementCartQuantity: (state, action: PayloadAction<ProductItem>) => {
        const stockFull = action.payload.quantity < action.payload.stock
          ? false
          : !state.stockFull;

        if (action.payload.quantity < action.payload.stock) {
          localStorage.removeItem('alert_shown');
        }

        const updatedState = {
          
          ...state,
          stockFull,
          summarySubTotalPrice:
          action.payload.quantity < action.payload.stock
          ? state.summarySubTotalPrice + action.payload.basePrice
          : state.summarySubTotalPrice,
          cartItem: state.cartItem.map((item: ProductItem) =>
          item.id === action.payload.id && item.quantity < action.payload.stock
            ? {
              
              ...item,
              quantity: item.quantity + 1,
              price: item.price + item.basePrice,                            
            }
            : item
          ),
      };
      localStorage.setItem('summary', JSON.stringify(updatedState.summarySubTotalPrice));
      localStorage.setItem("cartItems", JSON.stringify(updatedState.cartItem));
      return updatedState;
    
    },
    decrementCartQuantity: (state, action: PayloadAction<ProductItem>) => {
      if (action.payload.quantity <= action.payload.stock){
          localStorage.removeItem("alert_shown");
      }
      const updatedState = {
        ...state,
        stockFull: (action.payload.quantity > action.payload.stock) && false ,
        summarySubTotalPrice:
          action.payload.quantity > 1
            ? state.summarySubTotalPrice - action.payload.basePrice
            : state.summarySubTotalPrice,
        cartItem: state.cartItem.map((item: ProductItem) =>
          item.id === action.payload.id && item.quantity > 1
            ? {
                ...item,
                quantity: item.quantity - 1,
                price: item.price - item.basePrice,
              }
            : item
        ),
      };
      localStorage.setItem("summary", JSON.stringify(updatedState.summarySubTotalPrice));
      localStorage.setItem("cartItems", JSON.stringify(updatedState.cartItem));
      return updatedState;
    },
  },
});
export const CartActions = cartSlice.actions;
export default cartSlice.reducer;

