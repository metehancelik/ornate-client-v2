import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import userReducer from './features/userSlice';
import inquiryReducer from './features/inquirySlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    inquiry: inquiryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
