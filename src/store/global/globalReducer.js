import { ADD_TO_CURRENT_ROUTE } from "../actionTypes";

const initialState = {
    routeName: ''
}

export const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CURRENT_ROUTE:
            return {
                ...state,
                routeName: action.payload
            }

        default:
            return state;
    }
}