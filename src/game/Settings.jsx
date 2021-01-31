import React from 'react';
import {TextField, Box, Radio, FormControl, FormLabel, RadioGroup, FormControlLabel, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {colorMaps} from "../config";

const useStyles = makeStyles(theme => ({

}));

export default function Settings({settings, setSettings, setTab}) {
    const classes = useStyles();

    const [boardSize, setBoardSize] = React.useState(settings.size);
    const [rounds, setRounds] = React.useState(settings.rounds);
    const [theme, setTheme] = React.useState(settings.theme);

    function onSetSettings() {
        const newSettings = {
            size: boardSize,
            rounds,
            theme
        };

        setSettings(newSettings);
        setTab(0);
    }

    return (
        <Box className={classes.root}>
            <form>
                <FormControl component="fieldset" fullWidth>
                    <FormLabel component="legend">Board size</FormLabel>

                    <RadioGroup aria-label="board-size" name="board-size" value={boardSize}
                                onChange={e => setBoardSize(parseInt(e.target.value))}
                    >
                        <FormControlLabel value={18} control={<Radio />} label="18" />
                        <FormControlLabel value={24} control={<Radio />} label="24" />
                        <FormControlLabel value={32} control={<Radio />} label="32" />
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