import React from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";

//Importing Screens Which will appear in my website

import Login from '../../../screens/public/auth/login/login'
import Dashboard from '../../../screens/private/dashboard/index'

// Creating Routes for website with react-router-dom

function AppRoutes() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />

        </Switch>
    )
}

export default AppRoutes