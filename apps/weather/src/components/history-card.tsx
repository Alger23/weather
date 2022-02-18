import styled from "@emotion/styled";
import {Card} from "./card";
import {useSelector} from "react-redux";
import {RootState} from "../_redux/rootReducer";

/* eslint-disable-next-line */
export interface HistoryBoxProps {}

const StyledSection = styled.div`
`;

export function HistoryCard(props: HistoryBoxProps) {
  const histories = useSelector((state: RootState)=> state.weather.searchHistory);

  return (
    <StyledSection>
      <Card title="Search History">
        {histories.length===0 ?
          'No Record' :
          <table>
            {histories && histories.map((item,index)=>(<tr>
              <td>{index +1}. {item.city}, {item.country}</td>
              <td>{item.date.toLocaleTimeString('en-US')}</td>
              <td></td>
            </tr>))}
          </table>
        }

        <pre>{JSON.stringify(histories, null, 2)}</pre>
      </Card>
    </StyledSection>
  );
}

export default HistoryCard;
