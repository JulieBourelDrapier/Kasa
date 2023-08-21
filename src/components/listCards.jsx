import Card from "./card";
import accommodationInfo from '../data/logements.json';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const List = styled('ul')`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 20px;

  @media (min-width: 768px) {
    padding: 50px;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #F6F6F6;
    border-radius: 25px;
  }
 
`
const Item = styled('li')`
  flex-basis: 100%;

@media (min-width: 768px) {
  flex-basis: calc((100% - 30px) / 2);  
}

@media (min-width: 1200px) {
  flex-basis: calc((100% - 60px) / 3);  
}

`


function ListCards() {
  return (
      <List>
        {accommodationInfo.map((accommodation, index) => (
          <Item key={accommodation.id}>
            <Link to={`/accommodation/${accommodation.id}`}>
              <Card 
              id={accommodation.id}
              label={accommodation.title}
              cover={accommodation.cover}
              />
            </Link>
          </Item>
        ))}
      </List>
  )
}

export default ListCards
