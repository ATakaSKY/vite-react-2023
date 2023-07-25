import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import appReducer from 'store/slices/appSlice';
import postReducer from 'store/slices/postSlice';

const store = configureStore({
   reducer: {
      app: appReducer,
      post: postReducer
   }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
