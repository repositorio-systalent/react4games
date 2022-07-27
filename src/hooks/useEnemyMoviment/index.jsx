import useInterval from "@use-it/interval";
import React from "react";
import { handleNextMoviment } from "../../contexts/canvas/helpers";
import { EDirection } from "../../setings/constants";

function useEnemyMoviment(initialPosition) {

    const [positionState, positionUpdateStation] = React.useState(initialPosition);
    const [direction, directionUpdateStation] = React.useState(EDirection.RIGHT);

    useInterval(() => {

        const randomDirection = Object.values(EDirection)[Math.floor(Math.random() * 4)]

        const newPosition = handleNextMoviment(randomDirection, positionState);

        positionUpdateStation(newPosition);
        directionUpdateStation(randomDirection);

    }, 2000);

    return {
        position: positionState,
        direction
    }
}

export default useEnemyMoviment;