import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials } from '../../features/auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: 'https://ftsadc.org',
    /* baseUrl: 'https://localhost:3000', */
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token

        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})
// TODO: Exclude add Newuser function from checking token "Register"
const baseQueryWithReauth = async (args, api, extraOptions) => {
    // console.log(args) // request url, method, body
    // console.log(api) // signal, dispatch, getState()
    // console.log(extraOptions) //custom like {shout: true}

    // When create an account there will be this error 
    // "GET /auth/refresh not authorized"
    let result = await baseQuery(args, api, extraOptions)
    console.log("check here")
    // If you want, handle other status codes, access token is expired
    if (result?.error?.status === 403) {
        console.log('sending refresh token')

        // send refresh token to get new access token 
        const refreshResult = await baseQuery('/auth/refresh', api, extraOptions)

        if (refreshResult?.data) { // "data" should hold the access token

            // store the new token 
            api.dispatch(setCredentials({ ...refreshResult.data }))

            // retry original query with new access token
            result = await baseQuery(args, api, extraOptions)
        } else {

            if (refreshResult?.error?.status === 403) {
                refreshResult.error.data.message = "Your login has expired."
            }
            return refreshResult
        }
    }

    return result
}


export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,    // similar to Axios
    tagTypes: ['Poster', 'User'],   // use to cache data
    endpoints: builder => ({})
})