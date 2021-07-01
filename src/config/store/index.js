// Note: these are redux integration for future purpose not using redux right now

import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './Reducers'

const initalState={}
const middleWare = [thunk]
const store = createStore(rootReducer,initalState,composeWithDevTools(applyMiddleware(...middleWare)))

export {
    store,
}




// If you want to use Redux, Redux Thunk with Redux Persist, Please comment the upper code and uncomment the below code.

// import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'
// import thunk from 'redux-thunk';
// import reducer from './Reducers/index';

// const persistConfig = {
//     key: 'root',
//     storage,
// }

// const persistedReducer = persistReducer(persistConfig, reducer);

// const store = createStore(persistedReducer, applyMiddleware(thunk));
// const persistor = persistStore(store);

// export {
//     store,
//     persistor
// }