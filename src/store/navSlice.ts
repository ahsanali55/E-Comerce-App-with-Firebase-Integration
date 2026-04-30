import { createSlice } from "@reduxjs/toolkit";
import type { NavbarState } from "./types";

const initialState: NavbarState = {
    isShow: false
};

const navSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        ShowSideBar: (state) => {
            return {...state, isShow: !state.isShow}
        }
    }
});
export const NavbarActions = navSlice.actions;
export default navSlice.reducer;

