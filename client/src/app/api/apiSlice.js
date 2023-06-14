import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500' }),    // similar to Axios
    tagTypes: ['Poster', 'User'],   // use to cache data
    endpoints: builder => ({})
})