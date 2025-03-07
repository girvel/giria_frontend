import { Army } from "../model/types";

export default function ArmySection({ army }: { army: Army | null }) {
  if (army === null) return (<></>);
  return (
    <>
      <p>
        <span style={{color: "#" + army.color}}>{army.owner.toUpperCase()}</span>'S
        ARMY ({army.size})
      </p>
    </>
  );
}
