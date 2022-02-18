import styled from "@emotion/styled";
import {Button, Input, Typography} from "@seektop/ui";
import {Card} from "./card";
import {useState} from "react";
import {TodayWeatherCard} from "./today-weather-card";
import {RootState} from "../_redux/rootReducer";
import {weatherActions} from "../_redux/weather/weatherReducer";
import {connect, ConnectedProps} from "react-redux";

const mapState = (state: RootState)=>({
  weather: state.weather.weatherData
});

const {requestWeather} = weatherActions;
const mapDispatch = {
  requestWeather
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
/* eslint-disable-next-line */
export interface WeatherBoxProps {}
type Props = PropsFromRedux & WeatherBoxProps;

const StyledSection = styled.div`
  color: ${({theme}) => theme.font.color};
`;

export function WeatherCard(props: Props) {
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  // const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   setParams(p => ({...p, [e.target.name]: e.target.value}));
  // };

  const searchClick = () => {
    props.requestWeather({city, country});
  };

  const clearClick = () => {
    setCity('');
    setCountry('');
  };

  return (
    <StyledSection>
      <Card title="Today's Weather">
        <Typography>City:</Typography>
        <Input name="city" value={city} onChange={e=>setCity(e.target.value)}/>
        <Typography>County:</Typography>
        <Input name="country" value={country} onChange={e=>setCountry(e.target.value)}/>
        <Button onClick={searchClick}>Search</Button>
        <Button onClick={clearClick}>Clear</Button>

        {props.weather.success && <TodayWeatherCard data={props.weather.weather!}/>}
      </Card>
    </StyledSection>
  );
}

export default connector(WeatherCard);
