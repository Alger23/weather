import styled from "@emotion/styled";
import {WeatherResponse} from "../_redux/weather/weatherDeclaration";
import {Typography} from "@seektop/ui";

export interface TodayWeatherCardProps {
  data: WeatherResponse
}


const StyledItemRow = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 0.5rem;

  & > span:nth-child(1) {
    width: 130px;
  }
`;

function WeatherProperty(props: { caption: string, text: string }) {
  return (
    <StyledItemRow>
      <Typography>{props.caption}</Typography>
      <Typography>{props.text}</Typography>
    </StyledItemRow>
  );
}

const StyledSection = styled.div`
  padding: 2rem 2rem 0 2rem;
  max-width: 300px;
`;

const StyledWeather = styled.h1`
  padding: 0.3rem 0 1.5rem 0;
  margin: 0;
`;

export function TodayWeatherCard({data}: TodayWeatherCardProps) {
  const dateFormat = (unix_timestamp: number) => {
    const date = new Date(unix_timestamp * 1000);
    const d = date.toLocaleDateString('en-CA');
    const t = date.toLocaleTimeString('en-US', {hour12: true, hour: '2-digit', minute: '2-digit'});
    return `${d} ${t}`
  };
  return (
    <StyledSection>
      <Typography>{data.name}, {data.sys.country}</Typography>
      <StyledWeather>{data.weather[0].main}</StyledWeather>
      <WeatherProperty caption="Description:" text={data.weather[0].description}/>
      <WeatherProperty caption="Temperature:" text={`${data.main.temp_min}℃ ~ ${data.main.temp_max}℃`}/>
      <WeatherProperty caption="Humidity:" text={`${data.main.humidity}％`}/>
      <WeatherProperty caption="Time:" text={`${dateFormat(data.dt)}`}/>
    </StyledSection>
  );
}
