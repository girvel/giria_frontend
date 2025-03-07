import { TileType } from "../model/types";

const tile_type_names: { [_: string]: string } = {
  dead: "dead lands",
  plain: "plain",
  forest: "forest",
  mountain: "mountain",
};

export default function TileSection({ tile, x, y }: { tile: TileType, x: number, y: number }) {
  return (
    <>
      <p>{tile_type_names[tile].toUpperCase()}</p>
      <p>
        X: {x}<br />
        Y: {y}<br />
      </p>
    </>
  );
}
