import { JSX } from 'react';
import WorldTile from './WorldTile.tsx';
import './WorldMap.css';
import { WorldTileData } from '../api.tsx';

export default function WorldMap(
  { map, selected, setSelected }: {map: WorldTileData[][] | null, selected: WorldTileData | null, setSelected: any}
) {
  if (map === null) {
    return (
      <span>Loading...</span>
    );
  }

  let arr: JSX.Element[] = [];
  let i = 0;
  for (const line of map) {
    for (const data of line) {
      arr.push((
        <WorldTile data={data} selected={selected} setSelected={setSelected} key={i} />
      ))
      i++;
    }
    arr.push((<br key={i} />));
    i++;
  }

  return (
    <div className="world_map noselect">{arr}</div>
  );
}
