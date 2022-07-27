import React from "react";
import { canvas } from "../contexts/canvas/helpers";
import Tile from "./Tile";

function getCanvasMap() {

    const telesComponent = []

    for (let y = 0; y < canvas.length; y++) {
        for (let x = 0; x < canvas[y].length; x++) {

            const position = { x, y };
            const text = canvas[y][x];

            telesComponent.push(<Tile position={position} text={text} />)
        }
    }

    return telesComponent
}

function Debugger() {

    const tiles = getCanvasMap()

    return (
        <div>
            {tiles}
        </div>
    )
}

export default Debugger