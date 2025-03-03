import { WorldTileData } from '../api';
import './WorldTile.css';

const tile_characters: { [_: string]: string } = {
  dead: ".",
  plain: "-",
  forest: "f",
  mountain: "^",
};

export default function WorldTile(
  { data, selected, setSelected }: { 
    data: WorldTileData, selected: WorldTileData | null, setSelected: any
  }
) {
  const handleClick = () => {
    setSelected(data);
  };

  var classes = `world_tile world_tile__${data.tile}`;
  if (selected == data) {
    classes += " world_tile__selected";
  }

  const line = tile_characters[data.tile].repeat(2)

  return (
    <span className={classes} onClick={handleClick}>
        {line}<br />
        {line}
    </span>
  );
}
