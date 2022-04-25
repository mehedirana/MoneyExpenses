import { ADD_TO_EXPENSE_LIST, EMPTY_EXPENSE_LIST, REMOVE_FROM_EXPENSE_LIST, EDIT_EXPENSE_LIST } from "../actionTypes";

const initialState = {
    expense: [],
    total: 0
}

export const expenseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_EXPENSE_LIST:
            return {
                ...state,

            }
        case EDIT_EXPENSE_LIST:
            return {
                ...state,

            }
        case REMOVE_FROM_EXPENSE_LIST:
            return {
                ...state,

            }

        case EMPTY_EXPENSE_LIST:
            return {
                ...state,

            }
    }
}