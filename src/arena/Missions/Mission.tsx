import { I18n } from "@aws-amplify/core";
import classNames from "classnames";
import Button from "react-bootstrap/lib/Button";

import { EnMission, Mission as IMission, Missions } from "../interface";

interface Props
  extends Pick<
    Missions,
    | "lengua"
    | "setActiveIndex"
    | "setActiveMission"
    | "setView"
    | "setShowProofModal"
    | "missionBtnText"
  > {
  mission: IMission | EnMission;
  id: number;
}

/**
 * This component is used to display a mission.
 */
function Mission({
  lengua,
  mission,
  missionBtnText,
  setActiveIndex,
  setActiveMission,
  setShowProofModal,
  setView,
  id,
}: Props) {
  let flexCardClass = classNames("context-card", "block", "second-step-arena");
  return (
    <li
      className={flexCardClass}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        {lengua !== "en" ? (
          <>
            <h3>{(mission as IMission).esTitle}</h3>
            <p>{(mission as IMission).esDescription}</p>
          </>
        ) : (
          <>
            {/* convert mission type to english so as to have access to tile and description property */}
            <h3>{(mission as EnMission).title}</h3>
            <p>{(mission as EnMission).description}</p>
          </>
        )}
      </div>

      <Button
        onClick={() => {
          setActiveIndex(id);
          setActiveMission(mission as unknown as EnMission);
          setView?.("review");
          setShowProofModal(true);
        }}
      >
        {I18n.get(missionBtnText)}
      </Button>
    </li>
  );
}

export default Mission;
