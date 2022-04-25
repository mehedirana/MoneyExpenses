import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import { expenseReducer } from './expense/expenseReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persisConfig ={
    key: 'root',
    storage: AsyncStorage,

}
const rootReducer = combineReducers({
    rexpenseList : expenseReducer
})
const middleware =[thunk];

export const store = createStore(
  rootReducer, applyMiddleware(...middleware)
)

export const persistor = persistStore(store)