import './App.css';
import React from 'react';

import {Box} from "@material-ui/core";
import CssBaseline from '@material-ui/core/CssBaseline';

import {colorMaps, standardGame} from "./config";
import Game from "./game/Game";
import Settings from "./game/Settings";
import {TabNavigation} from "./game/TabNavigation";
import {TabPanel} from "./game/TabPanel";
import Topbar from "./game/Topbar";

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

                <div>
                    <TabPanel value={tab} index={0}>
                        <Box id="game-tab-content" display="flex" justifyContent="center" py={3}>
                            <Game
                                size={settings.size}
                                rounds={settings.rounds}
                                colorMap={colorMaps.get(settings.theme)}
                            />
                        </Box>
                    </TabPanel>

                    <TabPanel value={tab} index={1}>
                        <Box id="settings-tab-content" py={3}>
                            <Settings
                                settings={settings}
                                setSettings={setSettings}
                                setTab={setTab}
                            />
                        </Box>
                    </TabPanel>
                </div>
            </Box>
        </main>
    );
}

export default App;