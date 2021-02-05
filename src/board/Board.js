import {colors} from '../config.js';
import Utils from '../game/utils';

class Board {
    constructor(options) {
        this.defaultCellColors = options.colors;

        this.previousCellsToRepaint = [];
    }

    generateRandomBoard(size, colorMap) {
        const cellColors = Array.from(colorMap.keys());

        let board = [];

        for (let i = 0; i < size; ++i) {
            let row = [];

            for (let j = 0; j < size; ++j) {
                row.push(Utils.getRandomItem(cellColors || this.defaultCellColors));
            }

            board.push(row);
        }

        return board;
    }

    // bootleg bucket fill algorithm, don't judge
    repaint(color, originalBoard) {
        const board = originalBoard.slice();

        const visitedCells = new Set(['0|0']);

        const initialColor = board[0][0];

        let currentCell = [0,0];

        const findCellsToRepaint = (startCell) => {
            let neighbours = this.getNeighbours(board.length-1, board, initialColor, startCell, visitedCells);

            if (neighbours.length > 0) {
                for (const cell of neighbours) {
                    visitedCells.add(this.cellToString(cell));

                    findCellsToRepaint(cell);
                }
            }

            return visitedCells;
        };

        console.time('findCellsToRepaint');

        const cellsToRepaint = findCellsToRepaint(currentCell);

        //console.log('previousCellsToRepaint', this.previousCellsToRepaint);
        //this.previousCellsToRepaint = cellsToRepaint;

        console.timeEnd('findCellsToRepaint');

        for (const cell of Array.from(cellsToRepaint.values())) {
            const [row, col] = cell.split('|');

            board[row][col] = color;
        }

        return board;
    }

    cellToString([row, col]) {
        return `${row}|${col}`;
    }

    getNeighbours(size, board, color, [row, col], visitedCells) {
        const right = row < size ? [row+1, col] : [];
        const left = row !== 0 ? [row-1, col] : [];
        const top = col !== 0 ? [row, col-1] : [];
        const bottom = col < size ? [row, col+1] : [];

        return [right, left, top, bottom]
            .filter(cell => cell.length > 0 &&
                board[cell[0]][cell[1]] === color &&
                !visitedCells.has(this.cellToString(cell))
            );
    }

    isHomogeneous(board) {
        const initialCell = board[0][0];

        return board
            .filter(row => row.filter(cell => !(cell === initialCell)).length > 0)
            .length === 0;
    }
}

const board = new Board({colors});

export default board;