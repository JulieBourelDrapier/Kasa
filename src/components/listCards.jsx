import Card from "./card";
import accommodationInfo from '../data/logements.json';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const List = styled('ul')`
  list-style: none;
  margin: 0;
  padding:  30px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    background-color: #F6F6F6;
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
          <Item>
            <Link to={`/accommodation/${accommodation.id}`}>
              <Card 
              key={`${accommodation.id}`}
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