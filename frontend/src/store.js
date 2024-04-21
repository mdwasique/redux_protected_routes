import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const store = configureStore({
  reducer: {
    auth: rootReducer, // This assumes rootReducer is specifically handling authentication
  },
});

export default store;
