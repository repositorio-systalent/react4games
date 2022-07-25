import React from "react";
import './index.css'
import { TILE_SIZE, DEMON_TILE_SIZE } from "../../setings/constants";

const Demon = () => {
    return (
        <div
            style={{
                position: 'absolute',
                bottom: TILE_SIZE * 10,
                left: TILE_SIZE * 3,
                width: DEMON_TILE_SIZE,
                height: DEMON_TILE_SIZE,
                backgroundImage: "url(./assets/DEMON.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'demon-animation 1s steps(4) infinite'
            }} 
        />
    )
}

export default Demon