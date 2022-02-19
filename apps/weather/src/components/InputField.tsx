import {Input, Typography} from "@seektop/ui";
import styled from "@emotion/styled";
import {ChangeEvent} from "react";

export interface InputFieldProps {
  label: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>)=>void;
}
const StyledSection = styled.div`
  display: inline-block;
  & > span {
    margin-right: 0.5em;
  }
`;

export const InputField = (props: InputFieldProps) => {
  return (
    <StyledSection>
      <Typography>{props.label}</Typography>
      <Input value={props.value} onChange={props.onChange}/>
    </StyledSection>
  );
};

export default InputField;
