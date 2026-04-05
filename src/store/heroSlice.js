import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
    name: "hero",
    initialState: {
        title: "EXPLORE THE LATEST IN TECH INDUSTRIES.",
        mainTitle: "Your Destination For Cutting-Edge Gadgets!",
        description: "Welcome to Ahsan E-comerceStore, your ultimate destination for cutting-edge gadgets! Explore the latest in tech innovation and style with us. Shop now and discover a world of possibilities!",
        btnName: "Explore Our Products",
        image: 'heroImage.png',
    }
})
export const heroActions = heroSlice.actions;
export default heroSlice.reducer;