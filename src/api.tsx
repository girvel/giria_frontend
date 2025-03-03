const ADDRESS = "http://localhost:8080/"

export type TileType = "dead" | "plain" | "forest" | "mountain";

export interface WorldTile {
  x: number,
  y: number,
  tile: TileType,
}

export async function fetchWorldMap(): Promise<WorldTile[][]> {
  const response = await fetch(ADDRESS + "global_map");
  const json: WorldTile[] = await response.json();

  let result: WorldTile[][] = [];
  for (const entry of json) {
    if (result[entry.y] === undefined) {
      result[entry.y] = [];
    }
    result[entry.y][entry.x] = entry;
  }

  return result;
}
