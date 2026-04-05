import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

const createAccSlice = createSlice({
  name: "createAcc",
  initialState: {
    isCreated: false,
    loading: false,
  },

  reducers: {
    createAnAccountStart: (state) => {
      state.loading = true;
      state.isCreated = true;

    },
    createAnAccountSuccess: (state) => {
      state.loading = false;
      state.isCreated = true;
    },
    afterNavigation: (state) => {
      state.isCreated = false;
    },
    createAnAccountFail: (state) => {
      state.loading = false;
    },
  },
});
export const CreateAccActions = createAccSlice.actions;
export default createAccSlice.reducer;
