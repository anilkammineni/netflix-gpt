import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js"
import moviesReducer from "./movieSlice.js"
import gptReducer from "./gptSearchSlice.js"
import userPreferencesReducer from "./userPreferences.js"

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gptSearch: gptReducer,
            userPreferences: userPreferencesReducer
        }
    }
)

export default appStore;