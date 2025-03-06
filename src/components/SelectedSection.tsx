import { PlayerInfo, settle, WorldTileData } from "../api";


const tile_type_names: { [_: string]: string } = {
  dead: "dead lands",
  plain: "plain",
  forest: "forest",
  mountain: "mountain",
};

export default function SelectedSection(
  { selected, playerInfo, setPlayerInfo }
    : { selected: WorldTileData | null, playerInfo: PlayerInfo, setPlayerInfo: any }
) {
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
        <p>{selected.city.city_name.toUpperCase()}</p>
        <p>
          Population: {selected.city.population}<br />
          Owner: {selected.city.player_login}<br />
        </p>
        {result}
      </>
    )
  } else if (!playerInfo.settled) {
    const handleClick = () => {
      settle(selected.x, selected.y, "Dirthelm")
        .then(() => setPlayerInfo({...playerInfo, settled: true}));
    };

    result = (
      <>
        <p><button onClick={handleClick}>Settle here</button></p>
        {result}
      </>
    )
  }

  return result;
}
