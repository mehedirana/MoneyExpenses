import { ADD_TO_CURRENT_ROUTE } from "../actionTypes";

export const setRoute =(name)=> dispatch =>{
  dispatch({
      type: ADD_TO_CURRENT_ROUTE,
      payload: name
  })
}