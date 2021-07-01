import React from 'react';
// Importing these for redux integration. 
import { store, persistor } from './config/store/index';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

// Importing wrapped navigations with theme provider
import WithThemeAndRoutes from '../src/withThemeAndRoutes'
// importing main global app.css file
import './App.css';

function App() {
  return (
    // Wraping Naviations with Theme provider with redux provider for usning global state 
    <Provider store={store}>
      {/* App with MUI Theme Provider and Navigations */}
      <WithThemeAndRoutes />
    </Provider>

    // If you want to use Redux, Redux Thunk with Redux Persist, Please comment the upper code and uncomment the below code.


    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     {/* App with MUI Theme Provider and Navigations */}
    //     <WithThemeAndRoutes />
    //   </PersistGate>
    // </Provider>
  );
}

export default App;
