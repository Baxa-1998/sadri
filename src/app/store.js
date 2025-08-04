import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from '../features/goods/goodSlice';

export const store = configureStore({
  reducer: {
    goods: goodsReducer, // ✅ теперь всё работает
  },
});