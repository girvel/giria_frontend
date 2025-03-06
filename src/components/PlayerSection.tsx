import { PlayerInfo, Resources } from "../model/types";

export default function PlayerSection({ playerInfo, resources }: { playerInfo: PlayerInfo, resources: Resources }) {
  return (
    <>
      <p>{playerInfo.login.toUpperCase()}</p>
      <p>
        Gold: {resources.gold}<br />
        Wood: {resources.wood}
      </p>
    </>
  );
}
