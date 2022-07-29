import React from "react";
import Hero from "../Hero";
import { ECamvas, GAME_SIZE } from "../../setings/constants";
import MiniDemon from "../MiniDemon";
import Demon from "../Demon";
import Chest from "../Chest";
import Trap from "../Trap";
import { canvas } from "../../contexts/canvas/helpers";
import { ChestsContext } from "../../contexts/chests";

function getCanvasMap() {

  const parsonagens = []

  for (let y = 0; y < canvas.length; y++) {
      for (let x = 0; x < canvas[y].length; x++) {

          const position = { x, y };
          const text = canvas[y][x];

          if(text === ECamvas.TRAP){
            parsonagens.push(<Trap key={`${x}-${y}`} initialPosition={position} />)
          }

          if(text === ECamvas.MINI_DEMON){
            parsonagens.push(<MiniDemon key={`${x}-${y}`} initialPosition={position} />)
          }

          if(text === ECamvas.DEMON){
            parsonagens.push(<Demon key={`${x}-${y}`} initialPosition={position} />)
          }

          if(text === ECamvas.CHEST){
            parsonagens.push(<Chest key={`${x}-${y}`} initialPosition={position} />)
          }

          if(text === ECamvas.HERO){
            parsonagens.push(<Hero key={`${x}-${y}`} initialPosition={position} />)
          }
      }
  }

  return parsonagens
}

const elementes = getCanvasMap()

const Board = () => {

    const chestsContext = React.useContext(ChestsContext)  
  
    return (
      <div>
        {elementes}
        {chestsContext.totalChests === chestsContext.openedChests.total && (
          <img src="./assets/DOOR-OPEN.png" alt=""
          style={{
            position: "absolute",
            left: 578,
            top: 0,

          }}
        />
        )}
        
        <img src="./assets/tileset.gif" alt="" 
          width={GAME_SIZE}
          height={GAME_SIZE}
        />
      </div>
    )
}

export default Board