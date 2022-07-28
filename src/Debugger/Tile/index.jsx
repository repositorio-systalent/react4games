import React from "react";
import { ECamvas, TILE_SIZE } from "../../setings/constants"

function Tile(props) {

    function getTeleColor() {
        switch (props.text) {
            case ECamvas.FLOOR:
                return 'darkgray';

            case ECamvas.WALL:
                return 'yellow';

            case ECamvas.DOOR:
                return 'white';

            case ECamvas.TRAP:
                return 'chartreuse';

            case ECamvas.MINI_DEMON:
            case ECamvas.DEMON:
                return 'red';

            case ECamvas.CHEST:
                return 'cyan';

            case ECamvas.HERO:
                return 'magenta';
        }
    }

    const color = getTeleColor();
    return (
        <div style={
            {
                width: TILE_SIZE,
                height: TILE_SIZE,
                position: 'absolute',
                top: TILE_SIZE * props.position.y,
                left: TILE_SIZE * props.position.x,
                color: color,
                border: `2px solid ${color}`,
                fontSize: 32,
                zIndex: 2,
            }
        } >{props.text}</div>
    )
}

export default Tile