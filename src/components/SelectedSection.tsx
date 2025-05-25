import { PlayerInfo, Resources, WorldTileData } from "../model/types";
import ArmySection from "./ArmySection";
import CitySection from "./CitySection";
import TileSection from "./TileSection";


export default function SelectedSection(
  { selectionInfo, resources, playerInfo, setPlayerInfo }
    : { selectionInfo: WorldTileData | null, resources: Resources, playerInfo: PlayerInfo, setPlayerInfo: any }
) {
  if (selectionInfo === null) {
    return (
      <p>-- NO SELECTION --</p>
    );
  }

  return (
    <>
      <CitySection
        x={selectionInfo.x} y={selectionInfo.y} city={selectionInfo.city}
        resources={resources} playerInfo={playerInfo} setPlayerInfo={setPlayerInfo}
      />
      <ArmySection army={selectionInfo.army} />
      <TileSection tile={selectionInfo.tile} x={selectionInfo.x} y={selectionInfo.y} />
    </>
  );
}
