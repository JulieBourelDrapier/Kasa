
import Banner from '../components/banner'
import bannerImg from '../assets/imagebanner.png'
import styled from 'styled-components'
import Card from "./card";
import accommodationInfo from '../data/logements.json';
import { Link } from "react-router-dom";

const Main = styled('main')`
  margin: 20px 20px;

  @media (min-width: 768px) {
    margin: 27px 70px;
  }
`
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

function Home() {
  return (
      <Main>
          <Banner image={bannerImg} title="Chez vous, partout et ailleurs."	/>
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
      </Main> 
  )
}

export default Home