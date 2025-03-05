import {useEffect, useState} from 'react';
import WorldMap from './components/WorldMap';
import InfoBar from './components/InfoBar';
import './App.css';
import { fetchWorldMap, WorldTileData } from './api';
import LoginForm from './components/LoginForm';

export default function App() {
    const [login, setLogin] = useState<string | null>(null);
    const [worldMap, setWorldMap] = useState<WorldTileData[][] | null>(null);
    const [selected, setSelected] = useState<WorldTileData | null>(null);

    if (login === null) {
      return (
        <div className="app">
          <LoginForm setLogin={setLogin} />
        </div>
      );
    }

    useEffect(() => {
      fetchWorldMap().then((map) => setWorldMap(map));
    }, []);

    // useEffect(() => {
    //   async function testAuth() {
    //     const response = await fetch("http://localhost:8080/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         login: 'girvel',
    //         password: 'girvel',
    //       }),
    //       credentials: "include",
    //     });

    //     console.log(response);
    //     console.log(await response.json());

    //     const response2 = await fetch("http://localhost:8080/settle", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       credentials: "include",
    //       body: JSON.stringify({
    //         x: 0,
    //         y: 0,
    //         city_name: 'Dirthelm',
    //       }),
    //     });

    //     console.log(response2);
    //     console.log(await response2.json());
    //   }

    //   testAuth();
    // }, []);

    return (
      <div className="app">
        <div className="app__flex_container">
          <WorldMap map={worldMap} selected={selected} setSelected={setSelected} />
          <InfoBar selected={selected} />
        </div>
      </div>
    );
}
