import {useEffect, useState} from 'react';
import WorldMap from './components/WorldMap';
import InfoBar from './components/InfoBar';
import './App.css';
import { fetchResources, fetchWorldMap } from './model/api.tsx';
import { PlayerInfo, Point, Resources, World } from './model/types.tsx';
import LoginForm from './components/LoginForm.tsx';


export default function App() {
    const [playerInfo, setPlayerInfo] = useState<PlayerInfo | null>(null);
    const [resources, setResources] = useState<Resources | null>(null);
    const [worldMap, setWorldMap] = useState<World | null>(null);
    const [selected, setSelected] = useState<Point | null>(null);

    useEffect(() => {
      if (playerInfo === null) return;

      const update = async () => {
        setWorldMap(await fetchWorldMap());
        setResources(await fetchResources());
      };
      update();

      const id = setInterval(update, 1000);
      return () => clearInterval(id);
    }, [playerInfo]);

    if (playerInfo === null) {
      return (
        <div className="app">
          <LoginForm setPlayerInfo={setPlayerInfo} setResources={setResources} />
        </div>
      );
    }

    return (
      <div className="app">
        <div className="app__flex_container">
          <WorldMap map={worldMap} selected={selected} setSelected={setSelected} />
          <InfoBar 
            selectionInfo={selected && worldMap?.get(selected) || null}
            playerInfo={playerInfo}
            setPlayerInfo={setPlayerInfo}
            resources={resources as Resources}
          />
        </div>
      </div>
    );
}
