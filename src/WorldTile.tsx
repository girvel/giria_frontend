const tile_characters: { [_: string]: string } = {
  dead: ".",
  plain: "-",
  forest: "f",
  mountain: "^",
}

const tile_colors: { [_: string]: string } = {
  dead: "#993311",
  plain: "#00bb00",
  forest: "#008822",
  mountain: "#cccccc",
}

export default function WorldTile({ tile }: { tile: string }) {
  return (
    <span style={{
        display: "inline",
        color: tile_colors[tile],
    }}>
        {tile_characters[tile]}
    </span>
  )
}
