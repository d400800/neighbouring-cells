import Utils from './utils';
import {colors} from '../config.js';

class Board {
    constructor(options) {
        this.cellColors = options.colors;

        this.processedCells = new Set(['0|0']);
    }

    generateRandomBoard(size) {
        let board = [];

        for (let i = 0; i < size; ++i) {
            let row = [];

            for (let j = 0; j < size; ++j) {
                row.push(Utils.getRandomItem(this.cellColors));
            }

            board.push(row);
        }

        return board;
    }

    repaint(color, originalBoard) {
        console.time('findCellsToRepaint');

        const visitedCells = new Set(['0|0']);
        const board = originalBoard.slice();

        const initialColor = board[0][0];
        const initialCell = [0,0];

        const findCellsToRepaint = (startCell) => {
            let neighbours = this.getSameNeighbours(board, initialColor, startCell, visitedCells);

            if (neighbours.length > 0) {
                for (const cell of neighbours) {
                    visitedCells.add(this.cellToString(cell));

                    this.processedCells.add(this.cellToString(cell));

                    findCellsToRepaint(cell);
                }
            }


            console.log('visitedCells', visitedCells.size);
            return this.cellStringsToArr(Array.from(visitedCells.values()));
        }

        // START
        console.log(this.processedCells);
        const recentProcessedCell = this.cellStringsToArr(
            [Array.from(this.processedCells).pop()]
        )[0];

        console.log(recentProcessedCell);

        const cellsToRepaint = findCellsToRepaint(recentProcessedCell);

        console.timeEnd('findCellsToRepaint');

        for (const [row, col] of cellsToRepaint) {
            board[row][col] = color;
        }

        return board;
    }

    cellToString([row, col]) {
        return `${row}|${col}`;
    }

    cellStringsToArr(cellStrings) {
        return cellStrings
            .map(str => {
                const [row, col] = str.split('|');

                return [parseInt(row), parseInt(col)];
            });
    }

    getSameNeighbours(board, color, [row, col], visitedCells) {
        const size = board.length - 1;

        const right = row < size ? [row+1, col] : [];
        const left = row !== 0 ? [row-1, col] : [];
        const top = col !== 0 ? [row, col-1] : [];
        const bottom = col < size ? [row, col+1] : [];

        // TODO: optimize
        return [right, left, top, bottom]
            .filter(cell => {
                return cell.length > 0 &&
                    board[cell[0]][cell[1]] === color &&
                    !visitedCells.has(this.cellToString(cell))
            });
    }

    isHomogeneous(board) {
        const initialCell = board[0][0];

        const result = board
            .filter(row => row.filter(cell => !(cell === initialCell)).length > 0)
            .length === 0

        return result;
    }
}

const board = new Board({colors});

export default board;