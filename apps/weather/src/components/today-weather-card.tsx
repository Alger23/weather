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

  & > span:nth-of-type(1) {
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

const WeatherMain = styled.h1`
  padding: 0.3rem 0 1.5rem 0;
  margin: 0;
`;

export function TodayWeatherCard({data}: TodayWeatherCardProps) {
  const dateFormat = (unix_timestamp: number) => {
    const date = new Date(unix_timestamp * 1000);
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = date.getFullYear();
    //const d = date.toLocaleDateString('en-CA');
    const t = date.toLocaleTimeString('en-US', {hour12: true, hour: '2-digit', minute: '2-digit'});
    return `${yyyy}-${mm}-${dd} ${t}`
  };
  return (
    <StyledSection>
      <Typography>{data.name}, {data.sys.country}</Typography>
      <WeatherMain>{data.weather[0].main}</WeatherMain>
      <WeatherProperty caption="Description:" text={data.weather[0].description}/>
      <WeatherProperty caption="Temperature:" text={`${data.main.temp_min}℃ ~ ${data.main.temp_max}℃`}/>
      <WeatherProperty caption="Humidity:" text={`${data.main.humidity}％`}/>
      <WeatherProperty caption="Time:" text={`${dateFormat(data.dt)}`}/>
    </StyledSection>
  );
}
