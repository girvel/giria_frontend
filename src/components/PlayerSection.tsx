import { PlayerInfo } from "../model/types";

export default function PlayerSection({ playerInfo }: { playerInfo: PlayerInfo }) {
  return (
    <p>{playerInfo.login.toUpperCase()}</p>
  );
}
