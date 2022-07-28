import React from "react";
import { ECamvas, EDirection, EWalker } from "../../setings/constants";


export function handleNextMoviment(direction, position) {

    const newPosition = {
        x: position.x,
        y: position.y
    }

    switch (direction) {
        case EDirection.UP:
            newPosition.y--;        
            break;

        case EDirection.DOWN:
           newPosition.y++;
           break;
        
        case EDirection.LEFT:
            newPosition.x--;
            break;

        case EDirection.RIGHT:
            newPosition.x++;
            break;   
    }

    
    return newPosition

}

const FL = ECamvas.FLOOR;
const WL = ECamvas.WALL;
const DR = ECamvas.DOOR;
const TR = ECamvas.TRAP;
const MD = ECamvas.MINI_DEMON;
const DE = ECamvas.DEMON;
const CH = ECamvas.CHEST;
const HE = ECamvas.HERO;

export const canvas = [
    [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
    [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, DR, DR, WL, WL, WL, WL, WL],
    [WL, FL, FL, WL, FL, FL, FL, FL, WL, FL, FL, FL, FL, FL, FL, FL, WL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, CH, FL, FL, WL],
    [WL, FL, FL, FL, MD, FL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, MD, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, CH, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, DE, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, HE, WL, FL, FL, FL, FL, TR, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, FL, WL],
    [WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL, WL]
]

export function checkValidMuviment(nextPosition, walker) {

    const canvasValue = canvas[nextPosition.y][nextPosition.x]
    
    let result = walker === EWalker.HERO ? getHeroValidMoves(canvasValue) : getEnemyValidMoves(canvasValue)

    return result
}

function getHeroValidMoves(canvasValue) {
    return {
        valid: canvasValue === ECamvas.FLOOR || canvasValue === ECamvas.CHEST || canvasValue === ECamvas.TRAP || canvasValue === ECamvas.MINI_DEMON || canvasValue === ECamvas.DEMON,
        dead: canvasValue === ECamvas.TRAP || canvasValue === ECamvas.MINI_DEMON || canvasValue === ECamvas.DEMON,
        chest: canvasValue === ECamvas.CHEST,
        door: canvasValue === ECamvas.DOOR
    }
}

function getEnemyValidMoves(canvasValue) {
    return {
        valid: canvasValue === ECamvas.FLOOR || canvasValue === ECamvas.HERO,
        dead: false,
        chest: false,
        door: false
    }
}