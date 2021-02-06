import React from "react";

import {Box, Container} from "@material-ui/core";

import {colorMaps, standardGame} from "../config";
import Game from "./Game";
import Settings from "./Settings";
import {TabNavigation} from "./TabNavigation";
import {TabPanel} from "./TabPanel";
import Topbar from "./Topbar";

export function Layout() {
    const [tab, setTab] = React.useState(0);

    const [settings, setSettings] = React.useState({
        size: standardGame.size,
        theme: standardGame.theme,
        rounds: standardGame.rounds
    });
    
    return (
        <Container maxWidth="sm">
            <Box>
                <Box mb={2} py={2}>
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
        </Container>
    );
}