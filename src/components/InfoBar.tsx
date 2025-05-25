import { PlayerInfo, Resources, WorldTileData } from '../model/types';
import './InfoBar.css';
import PlayerSection from './PlayerSection';
import SelectedSection from './SelectedSection';


export default function InfoBar(
  { selectionInfo, playerInfo, setPlayerInfo, resources } : {
    selectionInfo: WorldTileData | null,
    playerInfo: PlayerInfo,
    setPlayerInfo: any,
    resources: Resources
  }
) {
  return (
    <div className="info_bar">
      <PlayerSection playerInfo={playerInfo} resources={resources} />
      <p>--------------------</p>
      <SelectedSection selectionInfo={selectionInfo} resources={resources} playerInfo={playerInfo} setPlayerInfo={setPlayerInfo} />
    </div>
  )
}
