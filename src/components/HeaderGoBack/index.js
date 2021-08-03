import React from "react";
import { useHistory } from "react-router-dom";
import { Container, ArrowBack, Title } from "./styles";

function HeaderGoBack({ color }) {
  const history = useHistory();

  return (
    <Container data-testid="goback" onClick={() => history.push("/")}>
      <ArrowBack data-testid="avatar" bgcolor={color} />
      <Title data-testid="text" color={color}>
        back
      </Title>
    </Container>
  );
}

export default HeaderGoBack;
