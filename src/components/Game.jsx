import React from "react";
import CanvasProvider from "../contexts/canvas";
import ChestsProvider from "../contexts/chests";
import Debugger from "../Debugger";
import Board from "./Board";

function Game(){
    return(
        <CanvasProvider>
          <ChestsProvider>
          <Debugger />
          <Board />
          </ChestsProvider>
        </CanvasProvider>
    )
}

export default Game