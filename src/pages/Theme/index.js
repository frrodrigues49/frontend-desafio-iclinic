import React, { useState } from "react";
import {
  Container,
  ContainerProfile,
  ChooseAgain,
  Avatar,
  YourMaster,
} from "./styles";
import { colors } from "../../styles";
import HeaderGoBack from "../../components/HeaderGoBack";
import Darth from "../../assets/darth.png";
import Luk from "../../assets/luke.png";

export default function Theme() {
  const [theme, setTheme] = useState("dark");

  return (
    <Container
      color={theme === "dark" ? colors.backgroundDark : colors.backgroundLight}
    >
      <HeaderGoBack color={theme === "dark" ? colors.white : colors.dark} />
      <ContainerProfile>
        <ChooseAgain
          bgcolor={theme === "dark" ? colors.white : colors.dark}
          color={theme === "dark" ? colors.dark : colors.backgroundLight}
        >
          choose your path again, Padawan
        </ChooseAgain>
        <Avatar src={theme === "dark" ? Darth : Luk} />
        <YourMaster color={theme === "dark" ? colors.white : colors.dark}>
          Your master is <strong>name mester</strong>
        </YourMaster>
      </ContainerProfile>
    </Container>
  );
}
