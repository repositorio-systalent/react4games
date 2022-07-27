import React from "react";
import './index.css'
import { TILE_SIZE } from "../../setings/constants";

const Chest = () => {
    return (
        <div
            style={{
                position: 'absolute',
                top: TILE_SIZE * 8,
                left: TILE_SIZE * 8,
                width: TILE_SIZE,
                height: TILE_SIZE,
                backgroundImage: "url(./assets/CHEST.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'chest-animation 1s steps(3) infinite',
             
            }}
        />
        )
}

export default Chest