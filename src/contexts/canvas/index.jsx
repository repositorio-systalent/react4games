import React from "react"
import { ECamvas } from "../../setings/constants";
import { canvas, checkValidMuviment, handleNextMoviment } from "./helpers"

export const CanvasContext = React.createContext({
    canvas: [],
    updateCanvas: (direction, currentPosition, walker) => null
})

function CanvasProvider( props ) {
    const [CanvasState, updateCanvasStets] = React.useState({
        canvas: canvas,
        updateCanvas: (direction, currentPosition, walker) => {
           
            const newPosition = handleNextMoviment(direction, currentPosition);
            const nextMove = checkValidMuviment(newPosition, walker)

            if(nextMove.valid){
                updateCanvasStets((prevState) => {
                   
                    const newCanvas = Object.assign([], prevState.canvas)
                    const currentValue = newCanvas[currentPosition.y][currentPosition.x]

                    newCanvas[currentPosition.y][currentPosition.x] = ECamvas.FLOOR
                    newCanvas[newPosition.y][newPosition.x] = currentValue
                    
                    return{
                        canvas: newCanvas,
                        updateCanvas: prevState.updateCanvas,
                    }

                })
            }

            return {
                newPosition,
                nextMove
            };
        }
    })

    return (
        <CanvasContext.Provider value={CanvasState} >
            {props.children}
        </CanvasContext.Provider>
    )
}

export default CanvasProvider

