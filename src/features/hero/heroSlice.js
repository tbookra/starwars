import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroName: "",
};

export const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    setHero: (state, action) => {
      state.heroName = action.payload;
    },
  },
});

export const { setHero } = heroSlice.actions;
export default heroSlice.reducer;
