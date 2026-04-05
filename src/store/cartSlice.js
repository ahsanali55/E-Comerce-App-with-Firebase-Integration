import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    summarySubTotalPrice: JSON.parse(localStorage.getItem("summary")) || 0,
    cartItem: JSON.parse(localStorage.getItem("cartItems")) || [],
    stockFull: false,
  },
  reducers: {
    addToCArt: (state, action) => {
      console.log("Item at Cart: ", action.payload);
      let isExisting = state.cartItem.find(
        (item) => item.id === action.payload.id
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
    removeItemFromCArt: (state, action) => {
      //   console.log(action.payload);
      const newCartItems = state.cartItem.filter(
        (item) => item.id !== action.payload.id
      );

      if (newCartItems) {
        const updatedState = {
          ...state,
          summarySubTotalPrice: newCartItems.reduce(
            (sum, item) => sum + item.price,
            0
          ),
          cartItem: newCartItems,
        };
        localStorage.setItem("summary", JSON.stringify(updatedState.summarySubTotalPrice));
        localStorage.setItem("cartItems",JSON.stringify(updatedState.cartItem));

        return updatedState;
      }
    },
    incrementCartQuantity: (state, action) => {
   
        const updatedState = {
          
          ...state,
          stockFull: (action.payload.quantity < action.payload.stock) ? localStorage.removeItem('alert_shown') : !state.stockFull,
          summarySubTotalPrice:
          action.payload.quantity < action.payload.stock
          ? state.summarySubTotalPrice + action.payload.basePrice
          : state.summarySubTotalPrice,
          cartItem: state.cartItem.map((item) =>
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
    decrementCartQuantity: (state, action) => {
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
        cartItem: state.cartItem.map((item) =>
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
