import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  token: null,
  loading: true,
}

const authSlice = createSlice({
  name: "auth",
  initialState, 
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
    }
  } 
});
export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;