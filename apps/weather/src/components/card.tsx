import styled from "@emotion/styled";
import {SectionHeader} from "@seektop/ui";
import React from "react";

export interface CardProps {
  title: string;
  children?: React.ReactNode;
}

const StyledSection = styled.div`
`;

export function Card({title, ...props}: CardProps){
  return (
    <StyledSection>
      <SectionHeader value={title}/>
      <hr/>
      {props.children}
    </StyledSection>
  );
}
