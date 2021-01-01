import './App.css';
import React from 'react';
import {Box} from "@material-ui/core";

import CssBaseline from '@material-ui/core/CssBaseline';

import Setup from "./game/Setup";

function App() {
  return (
    <main>
        <CssBaseline/>

        <Box m={2}>
            <Setup/>
        </Box>
    </main>
  );
}

export default App;
