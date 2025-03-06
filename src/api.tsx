import axios from 'axios';


axios.defaults.withCredentials = true;
const ADDRESS = "http://localhost:8080"

export type TileType = "dead" | "plain" | "forest" | "mountain";

export interface WorldTileData {
  x: number,
  y: number,
  tile: TileType,
  city: City | null,
};

export interface City {
  city_name: string,
  player_login: string,
  player_color: string,
  population: number,
};

export async function fetchWorldMap(): Promise<WorldTileData[][]> {
  const response = await fetch(`${ADDRESS}/world_map`);
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

export async function login(login: string, password: string): Promise<void> {
  await axios.post(`${ADDRESS}/login`, {
    login: login,
    password: password,
  });
}

export interface PlayerInfo {
  login: string,
  settled: boolean,
};

export async function fetchPlayerInfo(): Promise<PlayerInfo> {
  return (await axios.get(`${ADDRESS}/player_info`)).data;
}

export async function settle(x: number, y: number, city_name: string): Promise<void> {
  await axios.post(`${ADDRESS}/settle`, {
    x: x,
    y: y,
    city_name: city_name,
  });
}

