import useInterval from "@use-it/interval";
import React from "react";
import { CanvasContext } from "../../contexts/canvas";
import { checkValidMuviment, handleNextMoviment, isDead } from "../../contexts/canvas/helpers";
import { EDirection, EWalker } from "../../setings/constants";

function useEnemyMoviment(initialPosition) {
    const canvasContext = React.useContext(CanvasContext)
    const [positionState, positionUpdateStation] = React.useState(initialPosition);
    const [direction, directionUpdateStation] = React.useState(EDirection.RIGHT);

    useInterval(() => {

        const randomDirection = Object.values(EDirection)[Math.floor(Math.random() * 4)]
        const newPosition = handleNextMoviment(randomDirection, positionState);
        const nextMove = checkValidMuviment(newPosition, EWalker.ENEMY)

        const moviment = canvasContext.updateCanvas(randomDirection, positionState, EWalker.ENEMY )

        if(moviment.nextMove.valid){
            directionUpdateStation(moviment.nextMove);
            positionUpdateStation(moviment.newPosition);
        }

        if(moviment.nextMove.dead){
            isDead()
        }

    }, 2000);

    return {
        position: positionState,
        direction
    }
}

export default useEnemyMoviment;