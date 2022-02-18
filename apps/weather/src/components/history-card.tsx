import {SectionHeader} from "@seektop/ui";
import styled from "@emotion/styled";
import {Card} from "./card";

/* eslint-disable-next-line */
export interface HistoryBoxProps {}

const StyledSection = styled.div`
`;

export function HistoryCard(props: HistoryBoxProps) {
  return (
    <StyledSection>
      <Card title="Search History">

      </Card>
    </StyledSection>
  );
}

export default HistoryCard;
