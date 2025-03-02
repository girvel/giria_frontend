import { JSX } from 'react';
import WorldTile from './WorldTile.tsx';

// TODO! types for DTOs
export default function WorldMap({ map }: {map: any[]}) {
  let arr: JSX.Element[][] = [];
  let i = 0;
  for (const entry of map) {
    if (arr[entry.y] === undefined) {
      arr[entry.y] = [];
    }
    arr[entry.y][entry.x] = (<WorldTile tile={entry.tile} key={i} />);
    i++;
  }

  for (let line of arr) {
    line.push((<br key={i} />));
    i++;
  }

  return (
    <div>{arr}</div>
  );
}
