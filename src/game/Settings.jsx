import React, {useState} from 'react';

import {TextField, Box, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel, Button} from "@material-ui/core";

import {colorMaps, sizes} from "../config";

export default function Settings({settings, setSettings, setTab}) {
    const [size, setSize] = useState(settings.size);
    const [rounds, setRounds] = useState(settings.rounds);
    const [theme, setTheme] = useState(settings.theme);

    function onSetSettings() {
        const newSettings = {
            size,
            rounds,
            theme
        };

        setSettings(newSettings);
        setTab(0);
    }

    return (
        <Box>
            <form>
                <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend">Board size</FormLabel>

                    <RadioGroup aria-label="board-size" name="board-size"
                                value={size}
                                onChange={e => setSize(parseInt(e.target.value))}
                    >
                        {sizes.map(size => (
                            <FormControlLabel key={size} value={size} control={<Radio />} label={`${size}`} />
                        ))}
                    </RadioGroup>
                </FormControl>

                <Box mt={4}>
                    <FormControl component="fieldset" fullWidth>
                        <FormLabel component="legend">Theme</FormLabel>

                        <RadioGroup aria-label="board-size" name="board-size" value={theme}
                                    onChange={e => setTheme(e.target.value)}
                        >
                            {Array.from(colorMaps.keys()).map((theme) => (
                                <FormControlLabel key={theme} value={theme} control={<Radio />} label={theme} />
                            ))}
                        </RadioGroup>
                    </FormControl>
                </Box>

                <Box mt={4}>
                    <FormControl fullWidth>
                        <TextField
                            id="rounds"
                            label="Number of rounds"
                            size={"small"}
                            value={rounds || ''}
                            variant="outlined"
                            onChange={e => setRounds(parseInt(e.target.value))}
                        />
                    </FormControl>
                </Box>

                <Box mt={4}>
                    <Button variant={"contained"} onClick={onSetSettings}>
                        Save & Start
                    </Button>
                </Box>
            </form>
        </Box>
    );
}