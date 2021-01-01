import React from 'react';
import Game from "./Game";

export default function Setup() {
    return (
        <>
            <Game size={18} maxRounds={21}/>
        </>
    );
}