import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { colors } from "../../styles";
import { ContainerProfile, ChooseAgain, Avatar, YourMaster } from "./styles";

import Darth from "../../assets/darth.png";
import Luk from "../../assets/luke.png";

export default function Web({ handleStart, themeName }) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <ContainerProfile data-testid="web">
        <ChooseAgain
          data-testid="btnStart"
          bgcolor={themeName.theme === "dark" ? colors.white : colors.dark}
          color={
            themeName.theme === "dark" ? colors.dark : colors.backgroundLight
          }
          onClick={() => handleStart({ history, setLoading })}
          desabled={loading}
        >
          choose your path again, Padawan
        </ChooseAgain>
        <Avatar src={themeName.theme === "dark" ? Darth : Luk} />
        <YourMaster
          title="Your master is Luck"
          color={themeName.theme === "dark" ? colors.white : colors.dark}
        >
          Your master is <strong>{themeName.name}</strong>
        </YourMaster>
      </ContainerProfile>
    </>
  );
}
