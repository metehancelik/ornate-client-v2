import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userService from '../services/userService';

type data = {
    billingInfo: {
        fullName: string,
        address: string,
        iban: string,
        swift: string
    },
    _id: string,
    firstName: string,
    lastName: string,
    offerupNick: string,
    password: string,
    role: string,
    commissionRate: number,
    createdAt: Date,
    updatedAt: Date,
    __v: number
}

export interface UserState {
    data: data[]
    loading: boolean
}

const initialState: UserState = {
    data: [],
    loading: false
}

export const getUsers = createAsyncThunk(
    'user/all',
    async () => {
        const response = await userService.getUsers();
        return response.data;
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.data = action.payload.data;
            state.loading = false;
        });
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUsers.rejected, (state) => {
            state.loading = false;
        });
    },
})

// Action creators are generated for each case reducer function
export default userSlice.reducer