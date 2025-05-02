import { configureStore } from "@reduxjs/toolkit";
import hexaApi from "../apis/hexaApi";

export const store = configureStore({
  reducer: {
    [hexaApi.reducerPath]: hexaApi.reducer,
  },
  middleware: (getDefaultMiddlewares) => {
    return getDefaultMiddlewares().concat(hexaApi.middleware);
  },
  devTools: !import.meta.env.PROD,
});

