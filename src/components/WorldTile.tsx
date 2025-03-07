import { WorldTileData } from '../model/types';
import './WorldTile.css';
import { JSX } from 'react';

const TILE_CHARACTERS: { [_: string]: string } = {
  dead: ".",
  plain: "-",
  forest: "f",
  mountain: "^",
};

const CITY_CHARACTER = "C";

export default function WorldTile(
  { data, prev_tile, is_selected, setSelected }: { 
    data: WorldTileData, prev_tile: string, is_selected: boolean, setSelected: any
  }
) {
  const handleClick = () => {
    setSelected([data.x, data.y]);
  };

  let classes = `world_tile world_tile__${data.tile}`;
  if (is_selected) {
    classes += " world_tile__selected";
  }

  let tiles: (string | JSX.Element)[] = Array(4).fill(TILE_CHARACTERS[data.tile]);

  if (data.configuration < 4) {
    tiles[data.configuration] = (
      <span className={`world_tile world_tile__${prev_tile}`}>{TILE_CHARACTERS[prev_tile]}</span>
    );
  }

  if (data.city != null) {
    tiles[0] = (<span style={{color: "#" + data.city.player_color}}>{CITY_CHARACTER}</span>);
  }

  return (
    <span className={classes} onClick={handleClick}>
        {tiles[0]}{tiles[1]}<br />
        {tiles[2]}{tiles[3]}
    </span>
  );
}
