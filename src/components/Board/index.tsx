import React from "react";
import Hero from "../Hero";
import { GAME_SIZE } from "../../setings/constants";
import MiniDemon from "../MiniDemon";
import Demon from "../Demon";
import Chest from "../Chest";
import Trap from "../Trap";

const Board = () => {
    return (
      <div>
        <MiniDemon initialPosition={{ x: 10, y: 10 }} />
        <MiniDemon initialPosition={{ x: 5, y: 10 }} />
        <Hero />
        <Demon />
        <Chest />
        <Trap />
        <img src="./assets/tileset.gif"  alt="" 
          width={GAME_SIZE}
          height={GAME_SIZE}
        />
      </div>
    )
}

export default Board