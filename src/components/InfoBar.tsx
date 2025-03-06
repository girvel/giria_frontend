import { PlayerInfo, WorldTileData } from '../api';
import './InfoBar.css';
import PlayerSection from './PlayerSection';
import SelectedSection from './SelectedSection';


export default function InfoBar(
  { selected, playerInfo, setPlayerInfo }
    : {selected: WorldTileData | null, playerInfo: PlayerInfo, setPlayerInfo: any }
) {
  return (
    <div className="info_bar">
      <PlayerSection playerInfo={playerInfo} />
      <p>--------------------</p>
      <SelectedSection selected={selected} playerInfo={playerInfo} setPlayerInfo={setPlayerInfo} />
    </div>
  )
}
