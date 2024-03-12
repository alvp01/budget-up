import { configureStore } from '@reduxjs/toolkit';
import budgetsReducer from './slices/budgets';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    budgets: budgetsReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
