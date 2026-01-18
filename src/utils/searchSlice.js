import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{

    },
    reducers:{
        cacheSearch:(state,action)=>{
            Object.assign(state, action.payload); //return {...state,...action.payload} works same
        }
    }
})

export const {cacheSearch} = searchSlice.actions;
export default searchSlice.reducer;