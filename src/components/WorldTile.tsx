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
const ARMY_CHARACTER = "A";

export default function WorldTile(
  { data, prev_tile, is_selected, setSelected }: { 
    data: WorldTileData, prev_tile: string, is_selected: boolean, setSelected: any
  }
) {
  const handleClick = () => {
    setSelected([data.x, data.y]);
  };

  let tile_classes = `world_tile world_tile__${data.tile}`;
  if (is_selected) {
    tile_classes += " world_tile__selected";
  }

  let tiles: JSX.Element[] = Array(4).fill((
    <span className="world_tile__subtile">{TILE_CHARACTERS[data.tile]}</span>
  ));

  if (data.configuration < 4) {
    tiles[data.configuration] = (
      <span className={`world_tile__subtile world_tile__${prev_tile}`}>
        {TILE_CHARACTERS[prev_tile]}
      </span>
    );
  }

  if (data.city != null) {
    tiles[0] = (<span style={{color: "#" + data.city.player_color}}>{CITY_CHARACTER}</span>);
  }

  if (data.army != null) {
    tiles[3] = (<span style={{color: "#" + data.army.color}}>{ARMY_CHARACTER}</span>);
  }

  return (
    <span className={tile_classes} onClick={handleClick}>
        {tiles[0]}{tiles[1]}<br />
        {tiles[2]}{tiles[3]}
    </span>
  );
}
