import {Box} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

import {colors, colorMap} from '../config.js';

export const useCellStyles = makeStyles(theme => ({
    cell: {
        width: 30,
        height: 30,
        margin: 1,
        transition: 'background-color .25s'
    }
}));

export default function GameBoard({boardData, onColorSelect}) {
    const classes = useCellStyles();

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