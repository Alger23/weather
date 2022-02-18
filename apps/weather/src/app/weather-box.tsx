import styled from "@emotion/styled";
import {SectionHeader} from "@seektop/ui";

/* eslint-disable-next-line */
export interface WeatherBoxProps {}

const StyledSection = styled.div`
  color: black;
`;

export function WeatherBox(props: WeatherBoxProps){
  return (
    <StyledSection>
      <SectionHeader value="Today's Weather"/>
      <hr/>
      Clouds
      </StyledSection>
  );
}

export default WeatherBox;
