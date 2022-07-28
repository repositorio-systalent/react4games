export const TILE_SIZE = 48;
export const GAME_SIZE = 20 * TILE_SIZE // 965px
export const DEMON_TILE_SIZE = TILE_SIZE * 2
export const HEAD_OFFSET = 12
export enum EDirection {
    LEFT = "ArrowLeft",
    RIGHT = "ArrowRight",
    UP = "ArrowUp",
    DOWN = "ArrowDown"
}

export enum ECamvas {
    FLOOR = 0,
    WALL = 1,
    DOOR = 2,
    TRAP = 3,
    MINI_DEMON = 4,
    DEMON = 5,
    CHEST = 6,
    HERO = 7
}

export enum EWalker {
    HERO = "HERO",
    ENEMY = "ENEMY"
}