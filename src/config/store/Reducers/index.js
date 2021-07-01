// Note: these are redux integration for future purpose not using redux right now

import { combineReducers } from 'redux'
// Importing Individual Reducers
import userReducer from './user.reducers'




// Creating Combine Reducer

export default combineReducers({
    user: userReducer,
})