import axios from 'axios';
import { City, Grid, PlayerInfo, Resources, World, WorldTileData } from './types.tsx';


axios.defaults.withCredentials = true;
const ADDRESS = "http://localhost:8080"

export async function fetchWorldMap(): Promise<World> {
  const response = await fetch(`${ADDRESS}/world_map`);
  const json: WorldTileData[] = await response.json();

  let result: WorldTileData[][] = [];
  for (const entry of json) {
    if (result[entry.y] === undefined) {
      result[entry.y] = [];
    }
    result[entry.y][entry.x] = entry;
  }

  return new Grid(result);
}

export async function login(login: string, password: string): Promise<void> {
  await axios.post(`${ADDRESS}/login`, {
    login: login,
    password: password,
  });
}

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

export async function fetchResources(): Promise<Resources> {
  return (await axios.get(`${ADDRESS}/resources`)).data;
}

export async function hireSoldier(city_id_at: number): Promise<void> {
  await axios.post(`${ADDRESS}/hire_soldier`, {city_id: city_id_at});
}

