"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure(state, action) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// export const STATUS = Object.freeze({
//   IDLE: "idle",
//   Loading: "loading",
//   Success: "success",
//   Failed: "failed",
// });
// const initialState = {
//   user: {
//     isLoggedIn: false,
//     status: STATUS.IDLE,
//     isError: false,
//   },
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.user = initialState.user;
//     },
//     extraReducers: (builder) => {
//       builder.addCase(fetchUser.pending, (state) => {
//         state.status = STATUS.Loading;
//       });
//       builder.addCase(fetchUser.fulfilled, (state, action) => {
//         state.status = STATUS.Success;
//         state.user = action.payload;
//       });
//       builder.addCase(fetchUser.rejected, (state) => {
//         state.status = STATUS.Failed;
//       });
//     },
//   },
// });

// export const { login, logout, setStatus, setIsLoggedIn } = authSlice.actions;

// export default authSlice.reducer;

// export function authenticateUser(username, password) {
//   return async function authenticateUserThunk(dispatch, getSate) {
//     dispatch(setStatus(STATUS.Loading));
//     try {
//       const response = await fetch("http://localhost:8002/api/v1/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });
//       const data = await response.json();
//       dispatch(
//         login({
//           user: data.data?.user,
//           accessToken: data.data?.accessToken,
//           refreshToken: data.data?.refreshToken,
//           isLoggedIn: data.status === 200 ? true : false,
//           status: data.status === 200 ? STATUS.Success : STATUS.Failed,
//         })
//       );
//       dispatch(setStatus(STATUS.Success));
//     } catch (error) {
//       console.error("Error fetching user data: ", error);
//     }
//   };
// }

// export function fetchUser() {
//   return async function fetchUserThunk(dispatch, getSate) {
//     dispatch(setStatus(STATUS.Loading));
//     try {
//       const response = await fetch("http://localhost:8002/api/v1/users/", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//       });
//       const data = await response.json();
//       dispatch(
//         login({
//           user: data.data?.user,
//           accessToken: data.data?.accessToken,
//           refreshToken: data.data?.refreshToken,
//           isLoggedIn: data.status === 200 ? true : false,
//           status: data.status === 200 ? STATUS.Success : STATUS.Failed,
//         })
//       );
//     } catch (error) {
//       console.error("Error fetching user data: ", error);
//     }
//   };
// }
// export function validateToken() {
//   return async function authenticateAccessToken(dispatch, getSate) {
//     try {
//       //   dispatch(setStatus(STATUS.Loading));
//       const response = await fetch(
//         "http://localhost:8002/api/v1/users/verify-access-token",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           credentials: "include",
//           //   body: JSON.stringify({ }),
//         }
//       );
//       const data = await response.json();
//       //   console.log(data);
//       dispatch(setIsLoggedIn(data.status === 200 ? true : false));
//       //   dispatch(setStatus(STATUS.Success));
//     } catch (error) {
//       console.error("Error fetching user data: ", error);
//     }
//   };
// }

// // addTodo: (state, action) => {
// //   const todo = {
// //     id: nanoid(),
// //     text: action.payload.text,
// //   };
// //   state.todos.push(todo);
// // },
// // removeTodo: (state, action) => {
// //   state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
// // },
// // editTodo: (state, action) => {
// //   const todo = state.todos.find((todo) => todo.id === action.payload.id);
// //   if (todo) {
// //     todo.text = action.payload.text;
// //   }
// // },
