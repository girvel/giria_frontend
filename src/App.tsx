import './App.css'
import {useEffect, useState} from 'react';
import WorldMap from './WorldMap';

export default function App() {
    const [globalMap, setGlobalMap] = useState(null);

    useEffect(() => {
        async function fetchGlobalMap() {
          const response = await fetch("http://localhost:8080/global_map");
          const json = await response.json();
          setGlobalMap(json);
        }

        fetchGlobalMap();
    }, []);

    return globalMap === null
        ? (<span>Loading...</span>)
        : (<WorldMap map={globalMap} />)
}
