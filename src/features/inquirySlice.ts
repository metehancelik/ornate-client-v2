import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IInquiry } from '../interfaces';
import userService from '../services/userService';

export interface IPayload {
  payload: IInquiry;
  page: number;
}

interface InquiryState {
  data: IInquiry[];
  loading: boolean;
}

const initialState: InquiryState = {
  data: [],
  loading: false,
};
export const getInquiries = createAsyncThunk(
  'user/all',
  async (payload: IPayload) => {
    const response = await userService.getAllInquiries(
      payload.payload,
      payload.page
    );
    return response.data;
  }
);

export const inquirySlice = createSlice({
  name: 'inquiries',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getInquiries.fulfilled, (state, action) => {
      state.data = action.payload.data;
      state.loading = false;
    });
    builder.addCase(getInquiries.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getInquiries.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function

export default inquirySlice.reducer;
