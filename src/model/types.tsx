export type TileType = "dead" | "plain" | "forest" | "mountain";

export interface WorldTileData {
  x: number,
  y: number,
  tile: TileType,
  configuration: number,
  city: City | null,
};

export interface City {
  city_name: string,
  player_login: string,
  player_color: string,
  population: number,
};

export type Point = [number, number];

export function pointEq(a: Point | null, b: Point | null): boolean {
  if (a === b) return true;
  if (a === null || b === null) return false;
  return a[0] === b[0] && a[1] === b[1];
}

export class Grid<T> {
  inner: T[][];
  constructor(inner: T[][]) {
    this.inner = inner;
  }
  get(p: Point): T {
    return this.inner[p[1]][p[0]];
  }
}

export type World = Grid<WorldTileData>;

export interface PlayerInfo {
  login: string,
  settled: boolean,
};

export interface Resources {
  gold: number,
  wood: number,
};
