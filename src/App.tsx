import {useEffect, useState} from 'react';
import WorldMap from './WorldMap';

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

    return worldMap === null
        ? (<span>Loading...</span>)
        : (<WorldMap map={worldMap} />)
}
