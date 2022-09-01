import styled from "styled-components";
import { Container } from "../../Global/Style/GlobalStyle";

export const PropertiesContainer = styled(Container)`
  padding: 2rem 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  ${Container}
`;
