import styled from "@emotion/styled";
import {Button, Input, SectionHeader, Typography} from "@seektop/ui";
import {Card} from "./card";
import {ChangeEvent, useState} from "react";
import {TodayWeatherCard} from "./today-weather-card";

/* eslint-disable-next-line */
export interface WeatherBoxProps {
}

const StyledSection = styled.div`
  color: ${({theme}) => theme.font.color};
`;

export function WeatherCard(props: WeatherBoxProps) {
  const [params, setParams] = useState<{ [name: string]: string }>({});

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParams(p => ({...p, [e.target.name]: e.target.value}));
  };

  const searchClick = () => {
    return;
  };

  const clearClick = () => {
    setParams({});
  };

  return (
    <StyledSection>
      <Card title="Today's Weather">
        <Typography>City:</Typography>
        <Input name="city" value={params['city']} onChange={changeHandler}/>
        <Typography>County:</Typography>
        <Input name="country" value={params['country']} onChange={changeHandler}/>
        <Button onClick={searchClick}>Search</Button>
        <Button onClick={clearClick}>Clear</Button>

        <TodayWeatherCard/>
      </Card>
    </StyledSection>
  );
}

export default WeatherCard;
