import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../ActionType";

const ReducerWishlist = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return [...state, action.payload];

        case REMOVE_FROM_WISHLIST:
            const deletedWishlistArray = state.filter((item, index) => {
                return index !== action.payload;
            })
            return deletedWishlistArray;

        default:
            return state;
    }
}

export default ReducerWishlist;