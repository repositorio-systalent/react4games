import React from "react";
import './index.css'
import { TILE_SIZE, HEAD_OFFSET, EDirection } from "../../setings/constants";
import useEnemyMoviment from "../../hooks/useEnemyMoviment/index";

/*
const moviment = {
    position: { x: 5, y: 5 },
    direction: EDirection.RIGHT
}
*/

const MiniDemon = ( props ) => {

    const { position, direction } = useEnemyMoviment(props.initialPosition)

    return (
        <div
            style={{
                position: 'absolute',
                top: TILE_SIZE * position.x,
                left: TILE_SIZE * position.y,
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFFSET,
                backgroundImage: "url(./assets/MINI-DEMON.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'mini-demon-animation 1s steps(4) infinite',
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
                transform:`scalex(${direction === EDirection.RIGHT ? 1 : -1})`,
            }} 
        />
    )
}

export default MiniDemon