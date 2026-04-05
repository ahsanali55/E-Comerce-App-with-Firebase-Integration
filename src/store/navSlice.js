import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "navbar",
    initialState:{
        isShow: false
      },
    reducers: {
        ShowSideBar: (state, action) => {
            return {...state, isShow: !state.isShow}
        }
    }
});
export const NavbarActions = navSlice.actions;
export default navSlice.reducer;
