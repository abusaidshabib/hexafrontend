import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_APP_API}`,
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.user?.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token.access}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    const refreshTheToken = await baseQuery(
      {
        url: "/token-refresh/",
        method: "POST",
        body: { refresh: api.getState()?.auth?.user?.token?.refresh },
      },
      api,
      extraOptions
    );
    if (refreshTheToken?.data) {
    //   const user = {
    //     user: api.getState()?.auth?.user?.user,
    //     token: refreshTheToken?.data,
    //   };
      //   api.dispatch(setUser(user));
      //   setTokens(user);
      result = await baseQuery(args, api, extraOptions);
    } else {
      if (refreshTheToken.error?.status === 401) {
        // api.dispatch(deleteUser());
      }
      return refreshTheToken;
    }
  }
  return result;
};

const hexaApi = createApi({
  baseQuery: baseQueryWithRefreshToken,
  reducerPath: "hexaApi",
  tagTypes: [],
  endpoints: () => ({}),
});

export default hexaApi;
