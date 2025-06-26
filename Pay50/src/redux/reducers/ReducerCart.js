import { ADD_TO_CART, REMOVE_FROM_CART } from "../ActionType";

const ReducerCart = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            //we are using return here do we need to use break here? //ans- no need of break if we are using return in switch 
            return [...state, action.payload];

        case REMOVE_FROM_CART:
            const deletedCartArray = state.filter((item, index) => {
                return index !== action.payload;
            })
            return deletedCartArray;
        default:
            return state;
    }
}

export default ReducerCart;