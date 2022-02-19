import styled from '@emotion/styled';
import WeatherCard from "../components/weather-card";
import HistoryCard from "../components/history-card";
import {Global, css} from "@emotion/react";

const GlobalStyles = css`
  html * {
    font-family: Arial !important;
  }

  body {
    background-color: red;
  }
`
const StyledApp = styled.div`
  background-color: ${({theme}) => theme.backgroundColor};
  padding: 0 4vmin;
  height: 100vh;
  overflow: auto;
`;

export function App() {
  return (
    <StyledApp>
      <Global styles={GlobalStyles} />
      <WeatherCard/>
      <HistoryCard/>
    </StyledApp>
  );
}

export default App;
