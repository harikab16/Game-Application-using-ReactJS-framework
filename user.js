import { createSlice } from "@reduxjs/toolkit";

var id=1;
const userSlice=createSlice({
    name:'user',
    initialState:{value:{id:1,name:"Alien",company:"RCB",dob:"01/12/2012"} },
    reducers:{
        login:(state,action)=>
        {
            state.value=action.payload;
        }
    }
});



export const {login} =userSlice.actions
export default userSlice.reducer

