import { WorldTileData } from '../api';
import './WorldTile.css';

const TILE_CHARACTERS: { [_: string]: string } = {
  dead: ".",
  plain: "-",
  forest: "f",
  mountain: "^",
};

const CITY = {
  CHARACTER: "C",
  COLOR: "#dddddd",
};

export default function WorldTile(
  { data, selected, setSelected }: { 
    data: WorldTileData, selected: WorldTileData | null, setSelected: any
  }
) {
  const handleClick = () => {
    setSelected(data);
  };

  let classes = `world_tile world_tile__${data.tile}`;
  if (selected == data) {
    classes += " world_tile__selected";
  }

  const tile = TILE_CHARACTERS[data.tile]
  const city = data.city === null
    ? tile
    : (<span style={{color: CITY.COLOR}}>{CITY.CHARACTER}</span>);

  return (
    <span className={classes} onClick={handleClick}>
        {city}{tile}<br />
        {tile}{tile}
    </span>
  );
}
