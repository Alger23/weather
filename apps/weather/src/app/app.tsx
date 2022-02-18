import styled from '@emotion/styled';
import WeatherCard from "../components/weather-card";
import HistoryCard from "../components/history-card";

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export function App() {
  return (
    <StyledApp>
      <WeatherCard/>
      <HistoryCard/>
    </StyledApp>
  );
}

export default App;
