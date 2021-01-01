import React from "react";

import {Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import {colorMap} from '../config.js';

export const useCellStyles = makeStyles(theme => ({
    cell: {
        width: props => props.width,
        margin: 1,
        transition: 'background-color .25s',

        '&:after': {
            content: "''",
            display: 'block',
            paddingTop: '100%'
        }
    }
}));

export default function GameBoard({boardData, onColorSelect, size, gameControlsHeight}) {
    const cellWidth = (window.innerHeight - gameControlsHeight - 100) / size;
    const classes = useCellStyles({width: cellWidth});

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