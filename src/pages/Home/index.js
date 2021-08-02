import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Header, Title, SubTitle, Button } from "./styles";

export default function Home() {
  const history = useHistory();

  return (
    <Container>
      <Header>
        <Title>
          Welcome to <strong>iClinic</strong>
        </Title>
        <SubTitle>FRONTEND CHALLENGE</SubTitle>
      </Header>
      <Button onClick={() => history.push("/theme")}>START</Button>
    </Container>
  );
}
