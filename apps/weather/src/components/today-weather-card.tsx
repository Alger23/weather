import styled from "@emotion/styled";
import {WeatherResponse} from "../_redux/weather/weatherDeclaration";

export interface TodayWeatherCardProps {
  data: WeatherResponse
}

const StyledSection = styled.div`
  margin: 1rem;
`;

const StyledItemRow = styled.div`
  display: flex;
  flex-direction: row;
`;

function WeatherProperty (props:{caption:string, text: string}){
  return (
    <StyledItemRow>
      <caption>{props.caption}</caption>
      <span>{props.text}</span>
    </StyledItemRow>
  );
}

export function TodayWeatherCard({data}: TodayWeatherCardProps) {
  const dateFormat = (unix_timestamp :number)=>{
    const date = new Date(unix_timestamp * 1000);
    const d = date.toLocaleDateString('en-CA');
    const t = date.toLocaleTimeString('en-US', {hour12: true, hour: '2-digit', minute: '2-digit'});
    return `${d} ${t}`
  };
  return (
    <StyledSection>
      <h4>{data.name}, {data.sys.country}</h4>
      <h1>{data.weather[0].main}</h1>
      <WeatherProperty caption="Description:" text={data.weather[0].description}/>
      <WeatherProperty caption="Temperature:" text={`${data.main.temp_min}℃ ~ ${data.main.temp_max}℃`}/>
      <WeatherProperty caption="Humidity:" text={`${data.main.humidity}％`}/>
      <WeatherProperty caption="Time:" text={`${dateFormat(data.dt)}`}/>
    </StyledSection>
  );
}
