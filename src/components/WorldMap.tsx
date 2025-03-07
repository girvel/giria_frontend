import { JSX } from 'react';
import WorldTile from './WorldTile.tsx';
import './WorldMap.css';
import { Point, pointEq, World } from '../model/types.tsx';

export default function WorldMap(
  { map, selected, setSelected }: {map: World | null, selected: Point | null, setSelected: any}
) {
  if (map === null) {
    return (
      <span>Loading...</span>
    );
  }

  let arr: JSX.Element[] = [];
  let i = 0;
  let prev_tile = map.get([0, 0]).tile;
  for (const [y, line] of map.inner.entries()) {
    for (const [x, data] of line.entries()) {
      arr.push((
        <WorldTile
          data={data}
          prev_tile={prev_tile}
          is_selected={pointEq([x, y], selected)}
          setSelected={setSelected}
          key={i}
        />
      ))
      prev_tile = data.tile;
      i++;
    }
    arr.push((<br key={i} />));
    i++;
  }

  return (
    <div className="world_map noselect">{arr}</div>
  );
}
