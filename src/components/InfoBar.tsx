import { WorldTileData } from '../api';
import './InfoBar.css';
import SelectedSection from './SelectedSection';

export default function InfoBar({ selected }: {selected: WorldTileData | null}) {
  return (
    <div className="info_bar">
      <SelectedSection selected={selected} />
    </div>
  )
}
