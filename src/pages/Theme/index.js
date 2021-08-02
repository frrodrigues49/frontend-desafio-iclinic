import React from "react";
import { Container, ContainerWeb, ContainerMobile } from "./styles";
import { colors } from "../../styles";
import HeaderGoBack from "../../components/HeaderGoBack";
import Web from "./web";
import Mobile from "./mobile";
import { handleStart } from "../../utils";

export default function Theme() {
  const themeName = JSON.parse(localStorage.getItem("THEME"));

  return (
    <Container
      color={
        themeName.theme === "dark"
          ? colors.backgroundDark
          : colors.backgroundLight
      }
    >
      <HeaderGoBack
        color={themeName.theme === "dark" ? colors.white : colors.dark}
      />
      <ContainerWeb>
        <Web handleStart={handleStart} themeName={themeName} />
      </ContainerWeb>

      <ContainerMobile>
        <Mobile handleStart={handleStart} themeName={themeName} />
      </ContainerMobile>
    </Container>
  );
}
