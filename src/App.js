import './App.css';
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import {Layout} from "./game/Layout";

function App() {
    return (
        <main>
            <CssBaseline/>

            <Layout/>    
        </main>
    );
}

export default App;