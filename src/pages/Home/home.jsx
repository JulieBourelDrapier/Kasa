import ListCards from '../../components/listCards'
import Banner from '../../components/banner'
import bannerImg from '../../assets/imagebanner.png'
import styled from 'styled-components'

const Main = styled('main')`
  margin: 20px;
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