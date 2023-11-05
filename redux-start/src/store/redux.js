import { configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter-redux";
import authReducer from "./auth-redux";


const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer}
    //reducer: counterSlice.reducer
    // ----- when we have multiple reducers.
    //reducer: {counter: counterSlice.reducer}
});


export default store;