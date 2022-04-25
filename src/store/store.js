import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import { expenseReducer } from './expense/expenseReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalReducer } from './global/globalReducer';

const persisConfig ={
    key: 'root',
    storage: AsyncStorage,
    expenseList: ['expenseList']

}
const rootReducer = combineReducers({
    expenseList : persistReducer(persisConfig,expenseReducer),
    globalReducer: globalReducer
})
const middleware =[thunk];

export const store = createStore(
  rootReducer, applyMiddleware(...middleware)
)

export const persistor = persistStore(store)