"use client";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";
import authReducer from "../features/authSlice";
export const store = configureStore({
  reducer: {
    todos: todoReducer,
    auth: authReducer,
  },
});
