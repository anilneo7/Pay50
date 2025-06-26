import { ADD_ADDRESS, REMOVE_ADDRESS } from "../ActionType";

export const AddressReducer = (state = [], action) => {
    switch (action.type) {
        case (ADD_ADDRESS):
            return [...state, action.payload];

        case REMOVE_ADDRESS:
            return state.filter((item, index) => index !== action.payload);


        default:
            return state;
    }
}