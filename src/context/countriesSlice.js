import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    query: "",
    sortedCountries: [],
    selectedRegion: "",
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    changeCountries: (state, action) => {
      state.sortedCountries = action.payload;
    },
    changeRegion: (state, action) => {
      state.selectedRegion = action.payload;
    },
  },
});

export const { setQuery, changeCountries, changeRegion } =
  countriesSlice.actions;

export default countriesSlice.reducer;
