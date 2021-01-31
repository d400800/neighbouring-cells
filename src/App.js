import './App.css';
import React from 'react';
import {Box} from "@material-ui/core";
import {standardGame, colorMaps} from "./config";
import CssBaseline from '@material-ui/core/CssBaseline';

import Settings from "./game/Settings";
import Topbar from "./game/Topbar";
import Game from "./game/Game";
import {TabNavigation} from "./game/TabNavigation";

function App() {
    const [tab, setTab] = React.useState(0);

    const [settings, setSettings] = React.useState({
        size: standardGame.size,
        theme: standardGame.theme,
        rounds: standardGame.rounds
    });

    return (
        <main>
            <CssBaseline/>

            <Box px={2} py={2}>
                <Box mb={2}>
                    <Topbar/>
                </Box>

                <TabNavigation setTab={setTab} tab={tab}/>

                {tab === 0 ?
                    <Box display="flex" justifyContent="center" py={3}>
                        <Game
                            size={settings.size}
                            rounds={settings.rounds}
                            colorMap={colorMaps.get(settings.theme)}
                        />
                    </Box>
                    :
                    <Box py={3}>
                        <Settings
                            settings={settings}
                            setSettings={setSettings}
                            setTab={setTab}
                        />
                    </Box>
                }
            </Box>
        </main>
    );
}

export default App;
