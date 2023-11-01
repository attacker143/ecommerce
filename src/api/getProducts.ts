import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getProducts = createApi({
  reducerPath: "getProducts",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (build) => ({
    getProducts: build.query<any, void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getProduct: build.query<any, any>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    getLatestProduct: build.query<any, void>({
      query: () => ({
        url: "products?limit=8",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetLatestProductQuery,
} = getProducts;
