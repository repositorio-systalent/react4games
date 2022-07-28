import React from "react";
import './index.css'
import { TILE_SIZE, HEAD_OFFSET } from "../../setings/constants";

interface IProps {
    initialPosition: {x: number; y: number}
}

const Trap = ( props: IProps ) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: TILE_SIZE * props.initialPosition.y,
                left: TILE_SIZE * props.initialPosition.x,
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