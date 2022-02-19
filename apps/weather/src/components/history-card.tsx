import styled from "@emotion/styled";
import {Card} from "./card";
import {connect, ConnectedProps} from "react-redux";
import {RootState} from "../_redux/rootReducer";
import IconSearch from "../assets/search-24.png";
import IconTrash from "../assets/trash-24.png";
import {IconButton} from "@seektop/ui";
import {SearchHistoryItem} from "../_redux/weather/weatherDeclaration";
import {weatherActions} from "../_redux/weather/weatherReducer";


const mapState = (state: RootState) => ({
  histories: state.weather.searchHistory
});

const {
  removeSearchHistory,
  redoSearchHistory
} = weatherActions;

const mapDispatch = {
  removeSearchHistory,
  redoSearchHistory
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & HistoryBoxProps;

/* eslint-disable-next-line */
export interface HistoryBoxProps {
}

const StyledSection = styled.div`
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledNoData = styled.div`
  font-size: 3rem;
  text-align: center;
  margin: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
`

export function HistoryCard(props: Props) {

  function search(item: SearchHistoryItem) {
    props.redoSearchHistory({city: item.city, country: item.country});
  }

  function remove(item: SearchHistoryItem) {
    props.removeSearchHistory({city: item.city, country: item.country});
  }

  return (
    <StyledSection>
      <Card title="Search History">
        {/*{props.histories.map((item, index) => (*/}
        {/*  <StyledRow key={index}>*/}
        {/*    <div>{index + 1}. {item.city}, {item.country}</div>*/}
        {/*    <div>{item.date.toLocaleTimeString('en-US')}</div>*/}
        {/*    <IconButton src={IconSearch} onClick={() => search(item)}/>*/}
        {/*    <IconButton src={IconTrash} onClick={() => remove(item)}/>*/}
        {/*  </StyledRow>*/}
        {/*))}*/}

        {props.histories.length === 0 ?
          <StyledNoData>No Record</StyledNoData> :
          <table>
            <tbody>
            {props.histories && props.histories.map((item, index) => (<tr key={index}>
              <td style={{width: '80%'}}>{index + 1}. {item.city}, {item.country}</td>
              <td>{item.date.toLocaleTimeString('en-US',{hour: '2-digit', minute: '2-digit', second:'2-digit'})}</td>
              <td>
                <IconButton src={IconSearch} onClick={() => search(item)} title="Search"/>
                <IconButton src={IconTrash} onClick={() => remove(item)} title="Remove"/>
              </td>
            </tr>))}
            </tbody>
          </table>
        }
      </Card>
    </StyledSection>
  );
}

export default connector(HistoryCard);
