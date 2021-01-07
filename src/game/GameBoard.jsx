import React from "react";

import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {colorMap} from '../config.js';

export const useCellStyles = makeStyles(theme => ({
    cell: {
        width: '100%',
        margin: 1,
        transition: 'background-color .25s',

        [theme.breakpoints.up('sm')]: {
            width: props => props.cellWidth,
        },

        '&:after': {
            content: "''",
            display: 'block',
            paddingTop: '100%'
        }
    }
}));

export default function GameBoard({boardData, onColorSelect, size, gameControlsHeight}) {
    const cellWidth = (window.innerHeight - gameControlsHeight - 240) / size;
    const classes = useCellStyles({size, cellWidth});

    return (
        <>
            {boardData.map((row, i) => (
                <Box key={i} display={'flex'}>
                    {row.map((cell, j) => (
                        <div key={`${i}-${j}`}
                             role={"button"}
                             onClick={() => onColorSelect(cell)}
                             className={`${classes.cell}`}
                             style={{backgroundColor: colorMap.get(cell)}}
                        />
                    ))}
                </Box>
            ))}
        </>
    );
}