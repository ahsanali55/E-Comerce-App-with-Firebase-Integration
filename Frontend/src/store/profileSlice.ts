import { createSlice } from "@reduxjs/toolkit";
import type { ProfileState } from "./types";

const initialState: ProfileState = {
    isDropDown: false,
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        toggleDropDown: (state) => {
             state.isDropDown = ! state.isDropDown;
        },
        closeDropDown: (state) => { 
            state.isDropDown = false; 
        },
    }

});
export const ProfileActions = profileSlice.actions;
export default profileSlice.reducer;

