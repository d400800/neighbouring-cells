import React, {useEffect, useState} from 'react';
import {Box, Typography, Button} from "@material-ui/core";

import board from "./Board";

import GameBoard from "./GameBoard";
import CellSelector from "./CellSelector";
import GameDialog from "./Dialog";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    controls: {
        // [theme.breakpoints.down('sm')]: {
        //     position: 'fixed',
        //     left: theme.spacing(2),
        //     right: theme.spacing(2),
        //     bottom: theme.spacing(2)
        // },
    }
}));

export default function Game({size, maxRounds}) {
    const classes = useStyles();

    const [boardData, setBoardData] = useState(board.generateRandomBoard(size));
    const [round, setRound] = useState(1);
    const [victory, setVictory] = useState(false);
    const [gameControlsHeight, setGameControlsHeight] = useState();

    function selectNextColor(color) {
        const newBoardData = board.repaint(color, boardData);

        if (board.isHomogeneous(newBoardData)) {
            winGame();
        }

        setBoardData(newBoardData);
        setRound(round + 1);
    }

    function restartGame() {
        setRound(1);
        setVictory(false);
        setBoardData(board.generateRandomBoard(size));
    }

    function winGame() {
        setVictory(true);
    }

    const gameControlsId = 'game-controls';

    useEffect(() => {
        const $gameControls = document.getElementById(gameControlsId);

        setBoardData(board.generateRandomBoard(size));

        setGameControlsHeight($gameControls && $gameControls.offsetHeight);
    }, [size]);

    return (
        <Box width="100%">
            <Box>
                <GameBoard
                    size={size}
                    boardData={boardData}
                    gameControlsHeight={gameControlsHeight}
                    onColorSelect={selectNextColor}
                />
            </Box>

            <Box id={gameControlsId} mt={2} className={classes.controls}>
                <Box textAlign="center">
                    <Typography variant={"body1"}>Round {round}/{maxRounds}</Typography>
                </Box>

                <Box my={4}>
                    <CellSelector onColorSelect={selectNextColor}/>
                </Box>

                <Box mt={3} textAlign="center">
                    <Button variant={"contained"} onClick={restartGame}>
                        Restart
                    </Button>
                </Box>
            </Box>

            <GameDialog text={"You lost"} action={restartGame} open={round > maxRounds}/>

            <GameDialog text={"Congratulations! You won!"} action={restartGame} open={victory}/>
        </Box>
    );
}

