import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props?.color};
  height: 100vh;
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
  background-color: ${(props) => props?.bgcolor};
  color: ${(props) => props?.color};
`;

export const Avatar = styled.img`
  width: 250px;
  height: auto;
  margin-top: 50px;
`;

export const YourMaster = styled.div`
  color: ${(props) => props?.color};
  margin-top: 20px;
`;
