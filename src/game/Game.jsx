import React, {useState} from 'react';
import {Box, Typography, Button} from "@material-ui/core";

import board from "./Board";

import GameBoard from "./GameBoard";
import CellSelector from "./CellSelector";
import GameDialog from "./Dialog";

export default function Game({size, maxRounds}) {
    const [boardData, setBoardData] = useState(board.generateRandomBoard(size));
    const [round, setRound] = useState(1);
    const [victory, setVictory] = useState(false);

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

    return (
        <Box>
            <GameBoard boardData={boardData} onColorSelect={selectNextColor}/>

            <Box mt={3}>
                <CellSelector onColorSelect={selectNextColor}/>
            </Box>

            <Box mt={3} display={"flex"} alignItems={"center"}>
                <Box mr={3}>
                    <Typography variant={"body1"}>Round {round}/{maxRounds}</Typography>
                </Box>

                <Button variant={"contained"} size={"small"} onClick={restartGame}>
                    Restart
                </Button>
            </Box>

            <GameDialog text={"You lost"} action={restartGame} open={round > maxRounds}/>

            <GameDialog text={"Congratulations! You won!"} action={restartGame} open={victory}/>
        </Box>
    );
}

