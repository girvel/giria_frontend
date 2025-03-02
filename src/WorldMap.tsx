const tile_characters: { [_: string]: string } = {
  dead: ".",
  plain: "-",
  forest: "f",
  mountain: "^",
}

// TODO! types for DTOs
export default function WorldMap({ map }: {map: any[]}) {
  let arr: string[][] = [];
  for (const entry of map) {
    if (arr[entry.y] === undefined) {
      arr[entry.y] = [];
    }
    arr[entry.y][entry.x] = tile_characters[entry.tile];
  }

  let render = "";
  for (const line of arr) {
    for (const c of line) {
      render += c;
    }
    render += "\n";
  }

  return (
    <pre>{render}</pre>
  );
}
