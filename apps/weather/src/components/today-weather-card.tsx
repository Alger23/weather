import styled from "@emotion/styled";
import {WeatherResponse} from "../_redux/weather/weatherDeclaration";

export interface TodayWeatherCardProps {
  data: WeatherResponse
}

const StyledSection = styled.div`
`;

export function TodayWeatherCard({data}: TodayWeatherCardProps) {
  return (
    <StyledSection>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </StyledSection>
  );
}
