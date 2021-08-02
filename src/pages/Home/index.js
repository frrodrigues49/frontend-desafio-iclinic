import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Header, Title, SubTitle, Button } from "./styles";
import SkeletonTheme from "../../components/SkeletonTheme";
import { handleStart } from "../../utils";

export default function Home() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  return (
    <Container data-testid="homePage">
      {!loading ? (
        <>
          <Header>
            <Title title="Welcome to iClinic">
              Welcome to <strong>iClinic</strong>
            </Title>
            <SubTitle>FRONTEND CHALLENGE</SubTitle>
          </Header>
          <Button
            data-testid="btnStart"
            disabled={loading}
            onClick={() => handleStart({ history, setLoading })}
          >
            START
          </Button>
        </>
      ) : (
        <SkeletonTheme />
      )}
    </Container>
  );
}
