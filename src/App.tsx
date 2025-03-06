import {useEffect, useState} from 'react';
import WorldMap from './components/WorldMap';
import InfoBar from './components/InfoBar';
import './App.css';
import { fetchWorldMap, PlayerInfo, WorldTileData } from './api';
import LoginForm from './components/LoginForm';

export default function App() {
    const [playerInfo, setPlayerInfo] = useState<PlayerInfo | null>(null);
    const [worldMap, setWorldMap] = useState<WorldTileData[][] | null>(null);
    const [selected, setSelected] = useState<WorldTileData | null>(null);

    useEffect(() => {
      if (worldMap === null && playerInfo !== null) {
        fetchWorldMap().then((map) => setWorldMap(map));
      }
    }, [playerInfo]);

    if (playerInfo === null) {
      return (
        <div className="app">
          <LoginForm setPlayerInfo={setPlayerInfo} />
        </div>
      );
    }

    return (
      <div className="app">
        <div className="app__flex_container">
          <WorldMap map={worldMap} selected={selected} setSelected={setSelected} />
          <InfoBar selected={selected} playerInfo={playerInfo} />
        </div>
      </div>
    );
}
