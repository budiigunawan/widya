import {createStore, combineReducers, applyMiddleware} from 'redux'
import employeeReducer from './reducers/employeeReducer'

import thunk from 'redux-thunk'

const reducers = combineReducers({ employeeReducer })
const store = createStore(reducers, applyMiddleware(thunk))
export default store
