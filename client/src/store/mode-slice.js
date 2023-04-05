import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name: "mode",
    initialState:{
        mode: "dark"
    },
    reducers:{
        changeMode(state){
            state.mode = state.mode === "light" ? "dark" : "light";
        }
    }
})


export const { changeMode } = modeSlice.actions;
export default modeSlice;