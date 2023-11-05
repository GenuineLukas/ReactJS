import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter-redux";

const store = configureStore({
    reducer: {counter: counterReducer}
});

export default store;