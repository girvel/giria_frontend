import {useEffect, useState} from 'react';
import WorldMap from './WorldMap';
import InfoBar from './InfoBar';
import './App.css';

export default function App() {
    const [worldMap, setWorldMap] = useState(null);

    useEffect(() => {
        async function fetchWorldMap() {
          const response = await fetch("http://localhost:8080/global_map");
          const json = await response.json();
          setWorldMap(json);
        }

        fetchWorldMap();
    }, []);

    const map_render =
      worldMap === null
      ? (<span>Loading...</span>)
      : (<WorldMap map={worldMap} />);

    return (
      <div className="app">
        <div className="app__flex_container">
          {map_render}
          <InfoBar />
        </div>
      </div>
    );
}
