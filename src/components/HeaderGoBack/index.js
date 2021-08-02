import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { Container, ArrowBack, Title } from "./styles";

function HeaderGoBack({ color }) {
  const history = useHistory();

  return (
    <Container onClick={() => history.goBack()}>
      <ArrowBack color={color} />
      <Title color={color}>back</Title>
    </Container>
  );
}

HeaderGoBack.propTypes = {
  color: PropTypes.string.isRequired,
};

export default HeaderGoBack;
