import { configureStore } from "@reduxjs/toolkit";
import modeSlice from "./mode-slice";

const store = configureStore({
    reducer:{
        mode: modeSlice.reducer
    }
})

export default store;