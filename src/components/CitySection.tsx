import { hireSoldier, settle } from "../model/api";
import { City, PlayerInfo, Resources } from "../model/types";


export default function CitySection(
  { x, y, city, resources, playerInfo, setPlayerInfo }: {
    x: number, y: number,
    city: City | null, resources: Resources, playerInfo: PlayerInfo, setPlayerInfo: any
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

  const handleHireClick = () => {
    hireSoldier(city.city_id);
  };

  return (
    <>
      <p>{city.city_name.toUpperCase()}</p>
      <p>
        Population: {city.population}<br />
        Owner: <span style={{color: "#" + city.player_color}}>{city.player_login}</span><br />
      </p>
      {resources.gold >= 10 && city.population >= 1
      ? (<button onClick={handleHireClick}>Hire soldiers</button>)
      : (<></>)}
    </>
  );
}
