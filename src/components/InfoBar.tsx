import { PlayerInfo, WorldTileData } from '../api';
import './InfoBar.css';
import PlayerSection from './PlayerSection';
import SelectedSection from './SelectedSection';


export default function InfoBar(
  { selected, playerInfo }: {selected: WorldTileData | null, playerInfo: PlayerInfo }
) {
  return (
    <div className="info_bar">
      <PlayerSection playerInfo={playerInfo} />
      <p>--------------------</p>
      <SelectedSection selected={selected} />
    </div>
  )
}
