import React from "react";
import './index.css'
import { TILE_SIZE } from "../../setings/constants";
import { ChestsContext } from "../../contexts/chests";

interface IProps {
    initialPosition: {x: number; y: number}
}

const Chest = (props: IProps) => {

    const chestsContext = React.useContext(ChestsContext)

    const shouldAnimation = chestsContext.openedChests.positions.find((position: any) => {
        const match = props.initialPosition.y === position.y && props.initialPosition.x === position.x;
        
        return match
    })

    return (
        <div
            style={{
                position: 'absolute',
                top: TILE_SIZE * props.initialPosition.y,
                left: TILE_SIZE * props.initialPosition.x,
                width: TILE_SIZE,
                height: 100,
                backgroundImage: "url(./assets/CHEST.png)",
                backgroundRepeat: 'no-repeat',
                animation: shouldAnimation && 'chest-animation 1s steps(2) forwards',
             
            }}
        />
        )
}

export default Chest