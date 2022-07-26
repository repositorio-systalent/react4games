import useEventListener from "@use-it/event-listener";
import { useState } from "react";
import { EDirection } from "../../setings/constants";
import { handleNextMoviment } from "../../contexts/canvas/helpers";

function useHeroMoviment (initialPosition) {
    
    const [positionState, positionUpdateStation] = useState(initialPosition);
    const [direction, directionUpdateStation] = useState(EDirection.RIGHT);
    
    useEventListener('keydown', (event) => {
        
        const newPosition = handleNextMoviment(event.key, positionState);
        directionUpdateStation(event.key);
        positionUpdateStation(newPosition);
    })

    return {
        position: positionState,
        direction
    }
}

export default useHeroMoviment;