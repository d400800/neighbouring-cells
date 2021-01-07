import React, {useEffect, useRef} from 'react';
import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {colorMap, colors} from '../config.js';

const useStyles = makeStyles(theme => ({
    btn: {
        border: 'none',
        cursor: 'pointer',
        width: 24,
        height: 24
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'space-around'
        },
    }
}));

export default function CellSelector({onColorSelect}) {
    const onColorSelectRef = useRef(onColorSelect).current;
    const classes = useStyles();

    const cells = colors;

    useEffect(() => {
        document.addEventListener('keydown', function (e) {
            const cellIndex = parseInt(e.code.split('Digit')[1]);

            onColorSelectRef(cells[cellIndex-1]);
        });

        return () => {                                                               // second, we return an anonymous clean up function
            console.log('I clean now...');
        };
    }, [cells, onColorSelectRef])

    return (
        <Box className={classes.root}>
            {cells.map(cell => (
                <button title={cell} key={cell}
                        onClick={() => onColorSelect(cell)}
                        style={{backgroundColor: colorMap.get(cell)}}
                        className={classes.btn}
                />
            ))}
        </Box>
    );
}