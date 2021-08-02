import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { colors } from "../../styles";
import { ContainerProfile, ChooseAgain, Avatar, YourMaster } from "./styles";

import Darth from "../../assets/darth.png";
import Luk from "../../assets/luke.png";

export default function Mobile({ handleStart, themeName }) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  return (
    <>
      <ContainerProfile>
        <Avatar src={themeName.theme === "dark" ? Darth : Luk} />
        <YourMaster
          color={themeName.theme === "dark" ? colors.white : colors.dark}
        >
          Your master is <strong>{themeName.name}</strong>
        </YourMaster>
        <ChooseAgain
          bgcolor={themeName.theme === "dark" ? colors.white : colors.dark}
          color={
            themeName.theme === "dark" ? colors.dark : colors.backgroundLight
          }
          onClick={() => handleStart({ history, setLoading })}
          desabled={loading}
        >
          choose your path again, Padawan
        </ChooseAgain>
      </ContainerProfile>
    </>
  );
}
