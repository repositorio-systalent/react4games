import React from "react";

export const ChestsContext = React.createContext({
    totalChests: 0,
    openedChests: {
        total: 0,
        position :[]
    },
    updateOpenedChests: () => null
})

function ChestsProvider(props) {
    const [chestsState, updateChestsState] = React.useState({
        totalChests: 0,
        openedChests: {
            total: 0,
            position :[]
        },
        updateOpenedChests: () => {
            console.log('chests')

        }
    })

    return (
        <ChestsContext.Provider value={chestsState}> {props.children} </ChestsContext.Provider>
    )
}

export default ChestsProvider