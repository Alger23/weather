import styled from '@emotion/styled';
import WeatherBox from "./weather-box";

const StyledApp = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export function App() {
  return (
    <StyledApp>
      <WeatherBox/>
    </StyledApp>
  );
}

export default App;
