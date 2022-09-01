import styled from "styled-components";
import { Container } from "../../Global/Style/GlobalStyle";

export const FormContainer = styled(Container)`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.2rem;
  ${Container};
`;

export const AddButton = styled.button`
  border: 0px;
  background-color: #fa7f08;
  color: #fff;
  padding: 1rem 2rem;
`;

export const Input = styled.input`
  padding: 0 0.5rem;
  font-size: 16px;
  padding: 1rem 1rem;
  flex: ${({ width }) => (width ? width : 1)};
`;
