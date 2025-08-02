import { createSlice } from "@reduxjs/toolkit";

const gptSeachSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        movieNames: null,
        movieResults: null
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            state.showGPTSearch = !state.showGPTSearch
        },
        addGPTMovieSearchResults: (state, action) => {
            const { movieNames, searchResults } = action.payload
            state.movieNames = movieNames
            state.movieResults = searchResults
        }
    }
})

export const { toggleGPTSearchView,  addGPTMovieSearchResults} = gptSeachSlice.actions;

export default gptSeachSlice.reducer