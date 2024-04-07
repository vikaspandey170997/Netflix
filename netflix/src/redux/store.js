import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const store = configureStore({
  reducer: {
    app: userReducer,
    movie:movieReducer// Change "app" to "user" here if it's intended
  }
});
export default store;
