import {defaultColorMap} from "../config";
import board from "./Board";

const myBoard = board.generateRandomBoard(18, defaultColorMap);

describe('testing the Board', () => {
    it('should create a Board', () => {
        const newBoard = board.repaint('teal', myBoard);

        expect(newBoard).toBeDefined();
    });
});