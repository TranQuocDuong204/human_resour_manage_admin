import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


interface IAuthState {
    isAuthenticated: boolean;
    userInfo: any | null; // Adjust based on your user info structure
    loading: boolean;
    error: string | null;
}

const initialState: IAuthState = {
    isAuthenticated: false,
    userInfo: localStorage.getItem("auth") ?? null,
    loading: false,
    error: null,
}
export const loginUser = createAsyncThunk("auth/loginUser",

    async (userData: { email: string, password: string }, { rejectWithValue }) => {

        const response = await fetch("http://127.0.0.1:8000/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error("Failed to login")
        }

        const data = await response.json()
        if (data.error) {
            return rejectWithValue(data.error)
        }
        localStorage.setItem("auth", JSON.stringify(data))
        return data
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.userInfo = null;
            localStorage.removeItem("auth");
            state.isAuthenticated = false;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state: { loading: boolean; error: null; }) => {
                state.loading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state: { loading: boolean; isAuthenticated: boolean; userInfo: any; }, action: { payload: any; }) => {
                state.loading = false
                state.isAuthenticated = true
                state.userInfo = action.payload;
            })
            .addCase(loginUser.rejected, (state: { loading: boolean; error: any; }, action: { error: { message: string; }; }) => {
                state.loading = false;
                state.error = action.error.message || "Login failed"
            })

    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;