import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from '../services/authService';

type UserSession = {
    id: number;
    offerupNick: string;
    firstName: string;
    lastName: string;
    role: string;
} | null;

interface InitialState {
    userSession: UserSession;
    loading: boolean;
}

const initialState: InitialState = {
    userSession: null,
    loading: false,
};

export const checkSession = createAsyncThunk(
    'auth/checkOut',
    async () => {
        const response = await authService.checkSession();
        return response.data;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSession: (state, action) => {
            state.userSession = action.payload
        }

    },
    extraReducers: (builder) => {
        builder.addCase(checkSession.fulfilled, (state, action) => {
            state.userSession = action.payload.data;
            state.loading = false;
        });
        builder.addCase(checkSession.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(checkSession.rejected, (state) => {
            state.loading = false;
        });
    },
});

export default authSlice.reducer;

export const { setSession } = authSlice.actions
