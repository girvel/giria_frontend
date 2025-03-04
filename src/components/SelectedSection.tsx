import { WorldTileData } from "../api";


const tile_type_names: { [_: string]: string } = {
  dead: "dead lands",
  plain: "plain",
  forest: "forest",
  mountain: "mountain",
};

export default function SelectedSection({ selected }: { selected: WorldTileData | null }) {
  if (selected === null) {
    return (
      <p>-- NO SELECTION --</p>
    );
  }

  let result = (
    <>
      <p>{tile_type_names[selected.tile].toUpperCase()}</p>
      <p>
        X: {selected.x}<br />
        Y: {selected.y}<br />
      </p>
    </>
  );

  if (selected.city !== null) {
    result = (
      <>
        <p>CITY #{selected.city.city_id}</p>
        {result}
      </>
    )
  }

  return result;
}
