import React, {useEffect, useState} from 'react';

import {Box, Typography, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import board from "./Board";
import CellSelector from "./CellSelector";
import GameDialog from "./Dialog";
import GameBoard from "./GameBoard";

const useStyles = makeStyles(theme => ({
    board: {
        [theme.breakpoints.up('sm')]: {
            display: 'inline-block'
        }
    }
}));

export default function Game({size, rounds, colorMap}) {
    const classes = useStyles();

    const [boardData, setBoardData] = useState(board.generateRandomBoard(size, colorMap));
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
        setBoardData(board.generateRandomBoard(size, colorMap));
    }

    function winGame() {
        setVictory(true);
    }

    const gameControlsId = 'game-controls';

    useEffect(() => {
        const $gameControls = document.getElementById(gameControlsId);

        setBoardData(board.generateRandomBoard(size, colorMap));

        setGameControlsHeight($gameControls && $gameControls.offsetHeight);
    }, [size]);

    return (
        <Box width="100%" textAlign="center">
            <Box className={classes.board}>
                <GameBoard
                    size={size}
                    colorMap={colorMap}
                    boardData={boardData}
                    onColorSelect={selectNextColor}
                    gameControlsHeight={gameControlsHeight}
                />
            </Box>

            <Box id={gameControlsId} mt={2} className={classes.controls}>
                <Box textAlign="center">
                    <Typography variant={"body1"}>Round {round}/{rounds}</Typography>
                </Box>

                <Box my={4}>
                    <CellSelector onColorSelect={selectNextColor} colorMap={colorMap}/>
                </Box>

                <Box mt={3} textAlign="center">
                    <Button variant={"contained"} onClick={restartGame}>
                        Restart
                    </Button>
                </Box>
            </Box>

            <GameDialog
                title={"The game beat you"}
                text={'Want a revenge?'}
                action={restartGame}
                open={round > rounds}
            />

            <GameDialog
                title={"Congratulations!"}
                text={'You beat the game'}
                action={restartGame}
                open={victory}
            />
        </Box>
    );
}