import useEventListener from "@use-it/event-listener";
import React, { useState } from "react";
import { EDirection, EWalker } from "../../setings/constants";
import { isDead, isVictory } from "../../contexts/canvas/helpers";
import { CanvasContext } from "../../contexts/canvas";
import { ChestsContext } from "../../contexts/chests";

function useHeroMoviment (initialPosition) {
    const canvasContext = React.useContext(CanvasContext)
    const chestsContext = React.useContext(ChestsContext)
    
    const [positionState, positionUpdateStation] = useState(initialPosition);
    const [direction, directionUpdateStation] = useState(EDirection.RIGHT);
    
    useEventListener('keydown', (event) => {

        const direction = event.key

        if(direction.indexOf('Arrow') === -1) { return }

        const moviment = canvasContext.updateCanvas(direction, positionState, EWalker.HERO )

        if(moviment.nextMove.valid){
            directionUpdateStation(moviment.nextMove);
            positionUpdateStation(moviment.newPosition);
        }

        if(moviment.nextMove.dead){
            isDead()
        }

        if(moviment.nextMove.chest){
            chestsContext.updateOpenedChests(moviment.newPosition)
        }

        if(chestsContext.totalChests === chestsContext.openedChests.total &&  moviment.nextMove.door){
            isVictory()
        }
    })

    return {
        position: positionState,
        direction
    }
}

export default useHeroMoviment;