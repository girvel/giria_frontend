import { PlayerInfo } from "../api";

export default function PlayerSection({ playerInfo }: { playerInfo: PlayerInfo }) {
  return (
    <p>{playerInfo.login.toUpperCase()}</p>
  );
}
