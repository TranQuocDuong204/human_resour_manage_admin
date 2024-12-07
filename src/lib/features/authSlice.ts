import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";



export interface IAuthState {
    user_id: string;
    name: string;
    email: string;
    role: string;
    token: string;
}

const initialState: IAuthState = {
    user_id: "",
    name: "",
    email: "",
    role: "",
    token: ""
};


export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<IAuthState>) => {
            state.user_id = action.payload.user_id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.role = action.payload.role;
            state.token = action.payload.token;


            localStorage.setItem("auth", JSON.stringify(state));
        },
        logout: (state) => {
            state.user_id = '';
            state.name = "";
            state.email = "";
            state.role = "";
            state.token = "";
            localStorage.removeItem("auth")
        },
    },
})

export const { login, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;