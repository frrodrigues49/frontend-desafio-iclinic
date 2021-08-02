import styled from "styled-components";
import { fonts } from "../../styles";

export const Container = styled.div`
  background-color: ${(props) => props?.color};
  height: 100vh;
`;
export const ContainerWeb = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

export const ContainerMobile = styled.div`
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const ChooseAgain = styled.button`
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  border: none;
  font-weight: ${fonts.bold};
  background-color: ${(props) => props?.bgcolor};
  color: ${(props) => props?.color};
  opacity: ${(props) => (props.desabled ? 0.5 : 1)};

  @media (max-width: 767px) {
    margin-top: 50px;
  }
`;

export const Avatar = styled.img`
  width: 250px;
  height: auto;
  margin-top: 50px;

  @media (max-width: 767px) {
    margin-top: 20px;
  }
`;

export const YourMaster = styled.div`
  color: ${(props) => props?.color};
  text-align: center;
  font-size: 32px;
  margin-top: 20px;

  @media (max-width: 767px) {
    padding-left: 47px;
    padding-right: 47px;
  }
`;
