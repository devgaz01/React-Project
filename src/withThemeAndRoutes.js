import React, { useEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';


// Importing Main navigations and binding it with Theme provider of material ui. 
import Navigations from './config/routes/index'

function WithTheme(props) {
    // Creating default theme colors
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#fff",
            },
            secondary: {
                main: "#FC6C5F",
            },
        },

    });

    return (
        // Wraping my main navigations with theme provider
        <ThemeProvider theme={theme}>
            <Navigations />
        </ThemeProvider>
    );
}

export default WithTheme;
