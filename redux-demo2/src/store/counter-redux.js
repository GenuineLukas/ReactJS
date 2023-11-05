import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialCounterState = {counter:0};

const counterSlice = createSlice(
    {
        name:"counter",
        initialState:initialCounterState,
        reducers: {
            increment(state){
                state.counter++;
            },
            decrement(state){
                if(state.counter > 0){state.counter--;}
            }
        }
    }
);

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;