import React from "react";
import styled from '@emotion/styled';

export interface TypographyProps {
  children?: React.ReactNode;
}

const StyledTypography = styled.span`
  color: ${({theme}) => theme.font.color};
`;

export function Typography({children, ...props}: TypographyProps) {
  return (
    <StyledTypography>
      {children}
    </StyledTypography>
  );
}

export default Typography;
