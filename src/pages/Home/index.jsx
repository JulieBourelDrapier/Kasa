import ListCards from '../../components/ListCards'
import Banner from '../../components/Banner'
import bannerImg from '../../assets/imagebanner.png'
import styled from 'styled-components'

const Main = styled('main')`
  margin: 30px;
`

function Home() {
  return (
      <Main>
          <Banner image={bannerImg} title="Chez vous, partout et ailleurs."	/>
          <ListCards />
      </Main> 
  )
}

export default Home