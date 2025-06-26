import { createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import ReducerWishlist from "../reducers/ReducerWishlist";
import ReducerCart from "../reducers/ReducerCart";
import { AddressReducer } from "../reducers/AddressReducer";

const routeReducer = combineReducers({ ReducerCart, ReducerWishlist, AddressReducer })
const store = createStore(routeReducer);
// const store2=configureStore(Reducers);

export default store;
