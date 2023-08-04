import Banner from '../../components/Banner';
import Styled from 'styled-components';
import Collapse from '../../components/Collapse';
import bannerImg from '../../assets/imageabout.png';

const AboutContainer = Styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 27px;
`

function About() {

  return (
      <AboutContainer>
          <Banner image={bannerImg} />
          <Collapse />
      </AboutContainer>
  )
}

export default About