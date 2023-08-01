import imageApropos from '../../assets/imageabout.png'  
import Styled from 'styled-components'
import Collapse from '../../components/Collapse'

const ImgAbout = Styled.img`
  width: 100%;
  height: 223px;
  border-radius: 10px;
  object-fit: cover;
  margin-top: 27px;
`
function About() {

  return (
      <div>
          <ImgAbout src={imageApropos} alt="Paysage de fond" />
          <Collapse />
      </div>
  )
}

export default About