
import styled from "@emotion/styled";
import {Alert, Button} from "@seektop/ui";
import {Card} from "./card";
import React, {useState} from "react";
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

const ButtonGroup = styled.div`
  margin-top: 5px;
  & > button {
    margin-right: 5px;
  }
  & > button:last-of-type {
   margin-right: 0;
  }
`;

export function WeatherCard(props: Props) {
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  /**
   * Search weather
   */
  const searchClick = () => {
    props.requestWeather({city, country});
  };

  /**
   * Clear input fields
   */
  const clearClick = () => {
    setCity('');
    setCountry('');
  };

  /**
   * Search weather on press Enter
   * @param e
   */
  const searchOnPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchClick();
    }
  };

  return (
    <StyledSection>
      <Card title="Today's Weather">
        <div css={css`
          display: flex;
          flex-wrap: wrap;
          & > * {
          margin-right: 10px;
          }
        `}>
          <InputField label="City:" value={city} onChange={e=> setCity(e.target.value)} onKeyDown={searchOnPressEnter}/>
          <InputField label="Country:" value={country} onChange={e=> setCountry(e.target.value)} onKeyDown={searchOnPressEnter}/>
          <ButtonGroup>
            <Button onClick={searchClick}>Search</Button>
            <Button onClick={clearClick}>Clear</Button>
          </ButtonGroup>
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
