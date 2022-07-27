import React from "react";
import { TILE_SIZE, HEAD_OFFSET, EDirection } from "../../setings/constants";

import './index.css'
import useHeroMoviment from "../../hooks/useHeroMoviment";

const initialPosition = {
    x: 15,
    y: 15
};

const Hero = () => {
    
   const { position, direction } = useHeroMoviment(initialPosition);
    
    return (
        <div
            style={{
                position: 'absolute',
                top: TILE_SIZE * position.x,
                left: TILE_SIZE * position.y,
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFFSET,
                backgroundImage: "url(./assets/HERO.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'hero-animation 1s steps(4) infinite',
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
                transform:`scalex(${direction === EDirection.RIGHT ? 1 : -1})`,
                zIndex: 1
                
            }} 
        />
    )
}

export default Hero