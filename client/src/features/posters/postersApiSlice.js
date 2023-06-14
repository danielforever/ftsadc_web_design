import {
    createSelector,
    createEntityAdapter
} from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice"

// This is rtk query

const postersAdapter = createEntityAdapter({
    sortComparer: (a, b) => (a.eventdate === b.eventdate) ? 0 : a.eventdate ? 1 : -1
})    // This adapter iterate data has ids and entities

const initialState = postersAdapter.getInitialState()

export const postersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getPosters: builder.query({
            query: () => '/posters',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError   // Check if it is 200 status also checking if there is an error
            },
            keepUnusedDataFor: 5,   
            // 5 sec is just for development, after developing the app it is best to delete this which make this back to default 60 seconds
            transformResponse: responseData => {    // Getting response back from query
                const loadedPosters = responseData.map(poster => {
                    poster.id = poster._id  //createEntityAdapter is looking for id property not _id property 
                    return poster
                });
                return postersAdapter.setAll(initialState, loadedPosters)
            },
            providesTags: (result, error, arg) => {
                if (result?.ids) {
                    return [
                        // Add condition to filter the wanted poster


                        { type: 'Poster', id: 'LIST' },
                        ...result.ids.map(id => ({ type: 'Poster', id })) // If true return the id that mapped with Poster 
                    ]
                } else return [{ type: 'Poster', id: 'LIST' }]    // If false Only return the Poster and id
            }
        }),
    }),
})

// Export the hook
export const {
    useGetPostersQuery,
} = postersApiSlice

// returns the query result object
export const selectPostersResult = postersApiSlice.endpoints.getPosters.select()

// creates memoized selector
const selectPostersData = createSelector(
    selectPostersResult,
    postersResult => postersResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectAllPosters,
    selectById: selectPosterById,
    selectIds: selectPosterIds
    // Pass in a selector that returns the posters slice of state
} = postersAdapter.getSelectors(state => selectPostersData(state) ?? initialState)