import './App.css';
import React from 'react';
import {Box, Tab, Tabs} from "@material-ui/core";
import {standardGame} from "./config";
import CssBaseline from '@material-ui/core/CssBaseline';

import Setup from "./game/Setup";
import Topbar from "./game/Topbar";
import Game from "./game/Game";

function App() {
    const [page, setPage] = React.useState(0);

    return (
        <main>
            <CssBaseline/>

            <Box px={2} py={2}>
                <Box mb={2}>
                    <Topbar/>
                </Box>

                <TabNavigation setPage={setPage}/>

                {page === 0 ?
                    <Box display="flex" justifyContent="center" py={3}>
                        <Game size={standardGame.size} maxRounds={standardGame.rounds}/>
                    </Box>
                    :
                    <Box display="flex" justifyContent="center" py={3}>
                        <Game size={4} maxRounds={standardGame.rounds}/>
                    </Box>
                }
            </Box>
        </main>
    );
}

function TabNavigation({setPage}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setPage(newValue);
    };

    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }

    return (
        <Box>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="fullWidth"
                textColor="primary"
                indicatorColor="primary"
            >
                <Tab label="Standard Game" {...a11yProps(0)} />
                <Tab label="CUstom Game" {...a11yProps(1)} disabled/>
            </Tabs>
        </Box>
    );
}

export default App;
