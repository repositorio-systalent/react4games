import React from "react";
import './index.css'
import { TILE_SIZE, DEMON_TILE_SIZE, EDirection } from "../../setings/constants";
import useEnemyMoviment from "../../hooks/useEnemyMoviment/index";

const initialPosition = {
    x: 10,
    y: 7
};

const Demon = () => {

    const { position, direction } = useEnemyMoviment(initialPosition)


    return (
        <div
            style={{
                position: 'absolute',
                bottom: TILE_SIZE * position.x,
                left: TILE_SIZE * position.y,
                width: DEMON_TILE_SIZE,
                height: DEMON_TILE_SIZE,
                backgroundImage: "url(./assets/DEMON.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'demon-animation 1s steps(4) infinite',
                transform:`scalex(${direction === EDirection.RIGHT ? 1 : -1})`,
            }} 
        />
    )
}

export default Demon