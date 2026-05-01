import { createSlice } from "@reduxjs/toolkit";
import type { FooterState } from "./types";

const initialState: FooterState = {
    shopping: {
        title: 'SHOPPING',
        value: ["Computer Store", "Laptop Store", 'Accessories', 'Sales & Discount']
    },
    experience: {
        title: 'Experience',
        value: ["Contact Us", "Payment Method", "Delivery", "Return and Exchange"],
    },
    newsLetter: {
        title: 'NewsLetter',
        description: "Be the first to know about new arrivals, sales & promos!"
    }
};

const footerSlice = createSlice({
    name: 'footer',
    initialState,
    reducers: {},
    
})
export const footerActions = footerSlice.actions;
export default footerSlice.reducer;

