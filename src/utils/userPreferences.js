import { createSlice } from "@reduxjs/toolkit";

const userPreferences = createSlice({
    name: "userpreferences",
    initialState: {
        lang: "en"
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload
        }
    }
})

export const { changeLanguage } = userPreferences.actions;

export default userPreferences.reducer;