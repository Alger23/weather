import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SectionHeaderProps {
  value: string;
}

const StyledSectionHeader = styled.h3`
  color: ${({theme}) => theme.font.color};
  margin-block-end: 0.3em;
`;

export function SectionHeader({value}: SectionHeaderProps) {
  return (
    <StyledSectionHeader>
      {value}
    </StyledSectionHeader>
  );
}

export default SectionHeader;
