import { EDirection } from "../../setings/constants";


export function handleNextMoviment(direction, position) {

    const newPosition = {
        x: position.x,
        y: position.y
    }

    switch (direction) {
        case EDirection.LEFT:
            newPosition.y--;        
            break;

        case EDirection.RIGHT:
           newPosition.y++;
           break;
        
        case EDirection.UP:
            newPosition.x++;
            break;

        case EDirection.DOWN:
            newPosition.x--;
            break;   
    }

    
    return newPosition

}