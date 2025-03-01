const tile_characters: { [_: string]: string } = {
  dead: ".",
  plain: "-",
  forest: "f",
  mountain: "^",
}

export default function WorldMap({ map }: {map: any[]}) {
  let arr: string[][] = [];
  for (const entry of map) {
    let [x, y, tile] = entry;  // TODO! that's bullshit
    if (arr[y] === undefined) {
      arr[y] = [];
    }
    arr[y][x] = tile_characters[tile];
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
