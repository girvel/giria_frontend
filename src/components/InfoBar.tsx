import { PlayerInfo, WorldTileData } from '../model/types';
import './InfoBar.css';
import PlayerSection from './PlayerSection';
import SelectedSection from './SelectedSection';


export default function InfoBar(
  { selectionInfo, playerInfo, setPlayerInfo }
    : {selectionInfo: WorldTileData | null, playerInfo: PlayerInfo, setPlayerInfo: any }
) {
  return (
    <div className="info_bar">
      <PlayerSection playerInfo={playerInfo} />
      <p>--------------------</p>
      <SelectedSection selectionInfo={selectionInfo} playerInfo={playerInfo} setPlayerInfo={setPlayerInfo} />
    </div>
  )
}
