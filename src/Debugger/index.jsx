import React from "react";
import { CanvasContext } from "../contexts/canvas";
import Tile from "./Tile";

function getCanvasMap(canvas) {

    const teleComponent = []

    for (let y = 0; y < canvas.length; y++) {
        for (let x = 0; x < canvas[y].length; x++) {

            const position = { x, y };
            const text = canvas[y][x];

            teleComponent.push(<Tile key={`${x}-${y}`} position={position} text={text} />)
        }
    }

    return teleComponent
}

function Debugger() {
    const canvasContext = React.useContext(CanvasContext)
    const tiles = getCanvasMap(canvasContext.canvas)

    return (
        <div>
            {tiles}
        </div>
    )
}

export default Debugger