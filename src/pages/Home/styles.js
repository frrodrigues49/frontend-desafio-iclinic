import styled from 'styled-components';
import {colors, fonts} from '../../styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Header = styled.div`  
  color: ${colors.blue};
  text-align: center;
  margin-bottom: 100px; 
`;

export const Title = styled.h1`
  font-weight: ${fonts.regular};
  font-size: 62px;

  strong {
    font-weight: ${fonts.bold};
  }
`;

export const SubTitle = styled.span`
  font-weight: ${fonts.regular};
  font-size: 12px;
  letter-spacing: 4px;
`;

export const Button = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
  cursor: pointer;
  font-weight: ${fonts.bold};
  border: none;
  border-radius: 8px;
  padding: 15px 50px 15px 50px;
  letter-spacing: 3px;
`;
