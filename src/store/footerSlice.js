import { createSlice } from "@reduxjs/toolkit";

const footerSlice = createSlice({
    name: 'footer',
    initialState: {
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
        }
    
})
export const footerActions = footerSlice.actions;
export default footerSlice.reducer;
