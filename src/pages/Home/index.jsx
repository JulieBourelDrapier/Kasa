import ListCards from '../../components/ListCards'
import Banner from '../../components/Banner'
import bannerImg from '../../assets/imagebanner.png'

function Home() {
  return (
      <section>
          <Banner image={bannerImg} />
          <ListCards />
      </section> 
  )
}

export default Home