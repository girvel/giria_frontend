import {useEffect, useState} from 'react';
import WorldMap from './components/WorldMap';
import InfoBar from './components/InfoBar';
import './App.css';
import { fetchWorldMap, WorldTileData } from './api';

export default function App() {
    const [worldMap, setWorldMap] = useState<WorldTileData[][] | null>(null);

    useEffect(() => {
      fetchWorldMap().then((map) => setWorldMap(map));
    }, []);

    return (
      <div className="app">
        <div className="app__flex_container">
          <WorldMap map={worldMap} />
          <InfoBar />
        </div>
      </div>
    );
}
