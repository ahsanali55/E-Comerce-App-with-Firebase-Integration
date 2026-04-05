import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "NEW YEAR SALE",
    percent: "Get And Extra 50% Off",
    show: "SHOW NOW",
    image: "laptop.png",
  },
  {
    title: "NEW YEAR SALE",
    percent: "50% Discount On Speakers",
    show: "SHOW NOW",
    image: "headphone.png",

  },
  {
    title: "NEW YEAR SALE",
    percent: "Get And Extra 50% Off",
    show: "SHOW NOW",
    image: "iphone.png",

  },
  
];

const saleSlice = createSlice({
  name: "sale",
  initialState,
  reducers: {},
});
export const saleAction = saleSlice.actions;
export default saleSlice.reducer;

