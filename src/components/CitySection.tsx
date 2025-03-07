import { settle } from "../model/api";
import { City, PlayerInfo } from "../model/types";

export default function CitySection(
  { x, y, city, playerInfo, setPlayerInfo }: {
    x: number, y: number,
    city: City | null, playerInfo: PlayerInfo, setPlayerInfo: any
  }
) {
  if (city === null) {
    if (playerInfo.settled) return (<></>);

    const handleClick = () => {
      settle(x, y, "Dirthelm")
        .then(() => setPlayerInfo({...playerInfo, settled: true}));
    };

    return (
      <p><button onClick={handleClick}>Settle here</button></p>
    )
  }

  return (
    <>
      <p>{city.city_name.toUpperCase()}</p>
      <p>
        Population: {city.population}<br />
        Owner: <span style={{color: "#" + city.player_color}}>{city.player_login}</span><br />
      </p>
    </>
  );
}
