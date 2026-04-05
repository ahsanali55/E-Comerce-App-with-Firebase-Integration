import { createSlice } from "@reduxjs/toolkit";


const profileSlice = createSlice({
    name: "profile",
    initialState: {
        isDropDown: false,
    },
    reducers: {
        toggleDropDown: (state, action) => {
             state.isDropDown = ! state.isDropDown;
        },
        closeDropDown: (state, action) => { 
            state.isDropDown = false; 
        },
    }

});
export const ProfileActions = profileSlice.actions;
export default profileSlice.reducer;