import { PlayerInfo, Resources } from "../model/types";

export default function PlayerSection({ playerInfo, resources }: { playerInfo: PlayerInfo, resources: Resources }) {
  return (
    <>
      <p>{playerInfo.login.toUpperCase()}</p>
      <p>
        Gold: <span className="resource">{resources.gold}</span><br />
        Wood: <span className="resource">{resources.wood}</span>
      </p>
    </>
  );
}
