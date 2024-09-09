import { configureStore } from "@reduxjs/toolkit";
import cartslice  from "./Cartslice";

export const Store = configureStore({
    reducer : {
        allcart  : cartslice
    },
})