import './App.css'
import {useEffect, useState} from 'react';

export default function App() {
    const [globalMap, setGlobalMap] = useState(null);

    useEffect(() => {
        async function fetchGlobalMap() {
          const response = await fetch("localhost:8080/global_map");
          const json = await response.json();
          console.log(json);
          setGlobalMap(json);
        }

        fetchGlobalMap();
    }, []);

    return (
      <span>{globalMap}</span>
    )
}
