import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {user: null, status: 'idle', error: null},
    reducers: {
        setUser: (state, action) => {
            console.log(action.payload)
            state.user = action.payload;
            state.status = "succeed";
            console.log("set User: ", state.user)
            
        },
        logout: (state, action) => {
            state.user = null;
            state.status = 'idle';
            console.log("Logout:", state.user)
        },
        
        setloading: (state, action) => {
            state.status = "loading";
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.status = "failed";
        }
    }
})
export const AuthActions = authSlice.actions;
export default authSlice.reducer;