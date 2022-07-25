import useEventListener from "@use-it/event-listener";
import React, { useState } from "react";
import './index.css'
import { TILE_SIZE, HEAD_OFFSET } from "../../setings/constants";

const initialPosition = {
    x: 15,
    y: 15
};

const Hero = () => {
    const [positionState, positionUpdateStation] = useState(initialPosition);
    const [direction, directionUpdateStation] = useState('RIGHIT');
    
    useEventListener('keydown', (event) => {
        
        const newPosition = {
            x: positionState.x,
            y: positionState.y
        }

        if(event.key === 'ArrowLeft' ){
            newPosition.y--;
            directionUpdateStation('LEFT');
        }else if(event.key === 'ArrowRight' ) {
            newPosition.y++
            directionUpdateStation('RIGHIT');
        }else if(event.key === 'ArrowUp' ) {
            newPosition.x++
        }else if(event.key === 'ArrowDown' ) {
            newPosition.x--
        }      

        positionUpdateStation(newPosition);
    })
    
    return (
        <div
            style={{
                position: 'absolute',
                bottom: TILE_SIZE * positionState.x,
                left: TILE_SIZE * positionState.y,
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFFSET,
                backgroundImage: "url(./assets/HERO.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'hero-animation 1s steps(4) infinite',
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
                transform:`scalex(${direction === 'RIGHIT' ? 1 : -1})`
                
            }} 
        />
    )
}

export default Hero