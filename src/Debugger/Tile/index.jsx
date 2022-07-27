import React from "react";
import {TILE_SIZE} from "../../setings/constants"

function Tile( props ){
    
    function getTeleColor(){
        switch (props.text) {
            case 0:
                return 'yellow';
            case 1:
                return 'red';
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
            }
        } >{props.text}</div>
    )
}

export default Tile