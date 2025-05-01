import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddlewares) => {
    return getDefaultMiddlewares().concat();
  },
  devTools: !import.meta.env.PROD,
});

export default store;
