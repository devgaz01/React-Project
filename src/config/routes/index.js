import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// Importing Routes
import AppRoutes from './AppRoutes/AppRoutes'

// Binding Routes in main Router and exporting it from here as Main Navigations!

const Navigations = React.memo((props) => {
    return (
        <Router>
            {/* App Routes */}
            <AppRoutes />
        </Router>
    );
})


export default Navigations