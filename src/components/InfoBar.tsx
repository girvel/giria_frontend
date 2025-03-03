import { WorldTileData } from '../api';
import './InfoBar.css';

const tile_type_names: { [_: string]: string } = {
  dead: "dead lands",
  plain: "plain",
  forest: "forest",
  mountain: "mountain",
};

export default function InfoBar({ selected }: {selected: WorldTileData | null}) {
  const selected_section = selected === null
    ? (
      <p>-- NO SELECTION --</p>
    )
    : (
      <>
        <p>{tile_type_names[selected.tile].toUpperCase()}</p>
        <p>
          X: {selected.x}<br />
          Y: {selected.y}<br />
        </p>
      </>
    );

  return (
    <div className="info_bar">
      {selected_section}
    </div>
  )
}
