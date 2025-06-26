// import { createSlice } from "@reduxjs/toolkit";
// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         cart: [],
//     },

//     reducers: {
//         addItemToCart: (state, action) => {
//             state.cart.push(action.payload);
//         },

//         removeFromCart: (state, action) => {
//             state.cart = state.cart.filter(item => { item.id != action.payload })
//         }
//     }
// })

// export const { addItemToCart, removeFromCart } = createSlice.actions;
// export default cartSlice.reducer;