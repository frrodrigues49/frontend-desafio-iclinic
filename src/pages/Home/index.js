import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Header, Title, SubTitle, Button } from "./styles";
import SkeletonTheme from "../../components/SkeletonTheme";
import { handleStart } from "../../utils";

export default function Home() {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      {!loading ? (
        <>
          <Header>
            <Title>
              Welcome to <strong>iClinic</strong>
            </Title>
            <SubTitle>FRONTEND CHALLENGE</SubTitle>
          </Header>
          <Button
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
