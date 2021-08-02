import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  cursor: pointer;
`;

export const ArrowBack = styled(ArrowBackIcon)`
  color: ${(props) => props.color};
`;

export const Title = styled.span`
  color: ${(props) => props.color};
  margin-left: 10px;
`;
