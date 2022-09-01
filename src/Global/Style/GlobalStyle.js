import styled ,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Open Sans", sans-serif;
    overflow-wrap: break-word;
  }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 3rem;
  padding-right: 3rem;

  @media screen and (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media screen and (max-width: 420px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;