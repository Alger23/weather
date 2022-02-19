import styled from "@emotion/styled";
import {Alert, Button, Input, Typography} from "@seektop/ui";
import {Card} from "./card";
import {useState} from "react";
import {TodayWeatherCard} from "./today-weather-card";
import {RootState} from "../_redux/rootReducer";
import {weatherActions} from "../_redux/weather/weatherReducer";
import {connect, ConnectedProps} from "react-redux";
import { css } from "@emotion/react";
import InputField from "./InputField";

const mapState = (state: RootState) => ({
  weather: state.weather.weatherData
});

const {requestWeather} = weatherActions;
const mapDispatch = {
  requestWeather
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

/* eslint-disable-next-line */
export interface WeatherBoxProps {
}

type Props = PropsFromRedux & WeatherBoxProps;

const StyledSection = styled.div`
  color: ${({theme}) => theme.font.color};

`;




export function WeatherCard(props: Props) {
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');

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
        <div css={css`
          display: flex;
          & > * {
          margin-right: 5px;
          }
        `}>
          <InputField label="City:" value={city} onChange={e=> setCity(e.target.value)}/>
          <InputField label="Country:" value={country} onChange={e=> setCountry(e.target.value)}/>
          <Button onClick={searchClick}>Search</Button>
          <Button onClick={clearClick}>Clear</Button>
        </div>


        {props.weather.success?
          <TodayWeatherCard data={props.weather.weather!}/> :
          props.weather.error && <Alert severity="error" textAlign="left">
            {props.weather.error}
          </Alert>
        }
      </Card>
    </StyledSection>
  );
}

export default connector(WeatherCard);
