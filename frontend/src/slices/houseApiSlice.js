import { HOUSES_URL } from "../constants";
import {apiSlice} from "./apiSlice";

export const houseApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getHouses: builder.query({
      query: () => ({ url: HOUSES_URL, method: 'GET' }),
      keepUnusedDataFor: 5,
      
    }),
    getHouseDetails: builder.query({
      query: (id)=>({
        url: `${HOUSES_URL}/${id}`,
        method: 'GET',

      }),
    }),
  }),
});

export const { useGetHousesQuery , useGetHouseDetailsQuery } = houseApiSlice;