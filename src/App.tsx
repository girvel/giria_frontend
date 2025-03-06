import {useEffect, useState} from 'react';
import WorldMap from './components/WorldMap';
import InfoBar from './components/InfoBar';
import './App.css';
import { fetchWorldMap, PlayerInfo, Point, World } from './api';
import LoginForm from './components/LoginForm';


export default function App() {
    const [playerInfo, setPlayerInfo] = useState<PlayerInfo | null>(null);
    const [worldMap, setWorldMap] = useState<World | null>(null);
    const [selected, setSelected] = useState<Point | null>(null);

    useEffect(() => {
      if (playerInfo === null) return;

      const updateWorldMap = async () => setWorldMap(await fetchWorldMap());
      updateWorldMap();

      const id = setInterval(updateWorldMap, 1000);
      return () => clearInterval(id);
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
          <InfoBar selectionInfo={selected && worldMap?.get(selected)} playerInfo={playerInfo} setPlayerInfo={setPlayerInfo} />
        </div>
      </div>
    );
}
