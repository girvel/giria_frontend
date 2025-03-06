import { WorldTileData } from '../api';
import './WorldTile.css';

const TILE_CHARACTERS: { [_: string]: string } = {
  dead: ".",
  plain: "-",
  forest: "f",
  mountain: "^",
};

const CITY_CHARACTER = "C";

export default function WorldTile(
  { data, is_selected, setSelected }: { 
    data: WorldTileData, is_selected: boolean, setSelected: any
  }
) {
  const handleClick = () => {
    setSelected([data.x, data.y]);
  };

  let classes = `world_tile world_tile__${data.tile}`;
  if (is_selected) {
    classes += " world_tile__selected";
  }

  const tile = TILE_CHARACTERS[data.tile]
  const city = data.city === null
    ? tile
    : (<span style={{color: "#" + data.city.player_color}}>{CITY_CHARACTER}</span>);

  return (
    <span className={classes} onClick={handleClick}>
        {city}{tile}<br />
        {tile}{tile}
    </span>
  );
}
