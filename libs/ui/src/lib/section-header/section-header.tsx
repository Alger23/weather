import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SectionHeaderProps {
  value: string;
}

const StyledSectionHeader = styled.div`
  color: black;
`;

export function SectionHeader({value}: SectionHeaderProps) {
  return (
    <StyledSectionHeader>
      <h1>{value}</h1>
    </StyledSectionHeader>
  );
}

export default SectionHeader;
