const ADDRESS = "http://localhost:8080/"

export type TileType = "dead" | "plain" | "forest" | "mountain";

export interface WorldTileData {
  x: number,
  y: number,
  tile: TileType,
  city: City | null,
};

export interface City {
  city_id: number,
  player_login: string,
  population: number,
};

export async function fetchWorldMap(): Promise<WorldTileData[][]> {
  const response = await fetch(ADDRESS + "world_map");
  const json: WorldTileData[] = await response.json();

  let result: WorldTileData[][] = [];
  for (const entry of json) {
    if (result[entry.y] === undefined) {
      result[entry.y] = [];
    }
    result[entry.y][entry.x] = entry;
  }

  return result;
}
