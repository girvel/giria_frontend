import {useEffect, useState} from 'react';
import WorldMap from './components/WorldMap';
import InfoBar from './components/InfoBar';
import './App.css';
import { fetchWorldMap, WorldTileData } from './api';

export default function App() {
    const [worldMap, setWorldMap] = useState<WorldTileData[][] | null>(null);
    const [selected, setSelected] = useState<WorldTileData | null>(null);

    useEffect(() => {
      fetchWorldMap().then((map) => setWorldMap(map));
    }, []);

    useEffect(() => {
      async function testAuth() {
        const response = await fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            login: 'girvel',
            password: 'girvel',
          }),
        });

        const jwt: string = (await response.json()).token;

        console.log("Token:", jwt);

        const response2 = await fetch("http://localhost:8080/settle", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            x: 0,
            y: 0,
            city_name: 'Dirtberg',
          }),
        });

        console.log(response2);
      }

      testAuth();
    }, []);

    return (
      <div className="app">
        <div className="app__flex_container">
          <WorldMap map={worldMap} selected={selected} setSelected={setSelected} />
          <InfoBar selected={selected} />
        </div>
      </div>
    );
}
