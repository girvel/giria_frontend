import './WorldTile.css';

const tile_characters: { [_: string]: string } = {
  dead: ".",
  plain: "-",
  forest: "f",
  mountain: "^",
};

export default function WorldTile({ tile }: { tile: string }) {
  return (
    <span className={`world_tile world_tile__${tile}`}>
        {tile_characters[tile]}
    </span>
  );
}
