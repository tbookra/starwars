import { configureStore } from "@reduxjs/toolkit";
import heroSlice from "../features/hero/heroSlice";

export const store = configureStore({
    reducer: {
        hero: heroSlice
    }
})