import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';
import { commerceApi } from './api';
export const makeStore=()=>configureStore({reducer:{shop:shopReducer,[commerceApi.reducerPath]:commerceApi.reducer},middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(commerceApi.middleware)});
export type AppStore=ReturnType<typeof makeStore>;
export type RootState=ReturnType<AppStore['getState']>;
export type AppDispatch=AppStore['dispatch'];
