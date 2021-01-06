export const colorMap = new Map([
    ["teal", "#19FA8C"],
    ["blue", "#4C32FA"],
    ["yellow", "#FADA0C"],
    ["red", "#FA1E00"],
]);

export const colors = Array.from(colorMap.keys());

export const gameDescription = `
    The goal is to paint all board cells the same color.
    At the beginning of each round, the color of the top left (initial) cell is selected.
    The newly selected color will spread to other cells which have the same color as the initial one and are adjacent to each other (have a common top, right, bottom or left border). 
`;

export const title = 'Neighbouring Cells';

export const standardGame = {
    rounds: 21,
    size: 18
}