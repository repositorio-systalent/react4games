import React from "react";
import './index.css'
import { TILE_SIZE, HEAD_OFFSET } from "../../setings/constants";

const Trap = () => {
    return (
        <div
            style={{
                position: 'absolute',
                bottom: TILE_SIZE * 10,
                left: TILE_SIZE * 5,
                width: TILE_SIZE,
                height: TILE_SIZE ,
                backgroundImage: "url(./assets/TRAP.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'trap-animation 1s steps(8) infinite',
                
            }} 
        />
    )
}

export default Trap