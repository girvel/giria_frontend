import { PlayerInfo, settle, WorldTileData } from "../api";


const tile_type_names: { [_: string]: string } = {
  dead: "dead lands",
  plain: "plain",
  forest: "forest",
  mountain: "mountain",
};

export default function SelectedSection(
  { selectionInfo, playerInfo, setPlayerInfo }
    : { selectionInfo: WorldTileData | null, playerInfo: PlayerInfo, setPlayerInfo: any }
) {
  if (selectionInfo === null) {
    return (
      <p>-- NO SELECTION --</p>
    );
  }

  let result = (
    <>
      <p>{tile_type_names[selectionInfo.tile].toUpperCase()}</p>
      <p>
        X: {selectionInfo.x}<br />
        Y: {selectionInfo.y}<br />
      </p>
    </>
  );

  if (selectionInfo.city !== null) {
    result = (
      <>
        <p>{selectionInfo.city.city_name.toUpperCase()}</p>
        <p>
          Population: {selectionInfo.city.population}<br />
          Owner: {selectionInfo.city.player_login}<br />
        </p>
        {result}
      </>
    )
  } else if (!playerInfo.settled) {
    const handleClick = () => {
      settle(selectionInfo.x, selectionInfo.y, "Dirthelm")
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
