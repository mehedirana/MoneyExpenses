import { ADD_TO_EXPENSE_LIST, EMPTY_EXPENSE_LIST, REMOVE_FROM_EXPENSE_LIST, EDIT_EXPENSE_LIST } from "../actionTypes";

export const addToExpense = item => dispatch => {
    dispatch({
        type: ADD_TO_EXPENSE_LIST,
        payload:{...item}
    })
}
export const editExpense = item => dispatch => {
    dispatch({
        type: EDIT_EXPENSE_LIST,
        payload:item
    })
}
export const removeFromExpense = item => dispatch => {
    dispatch({
        type: REMOVE_FROM_EXPENSE_LIST,
        payload:item
    })
}
export const emptyExpense = () => dispatch => {
    dispatch({
        type: EMPTY_EXPENSE_LIST,
    })
}

