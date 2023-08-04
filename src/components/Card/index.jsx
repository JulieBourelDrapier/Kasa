import { PropTypes } from 'prop-types'
import styled from 'styled-components'


const CardContainer = styled('section')`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
      background-color: rgba(246, 246, 246, 1);
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      width: 90%;
`

const CardWrapper = styled('card')`
  margin-top: 27px;
  position: relative;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`

const CardImage = styled('img')`
width: auto;
height: 255px;
border-radius: 10px;
object-fit: cover;
`

const CardLabel = styled('figcaption')`
font-family: Montserrat;
color: #fff;
font-size: 18px;
font-weight: 500;
position: absolute;
border-radius: 10px;
top: 210px;
text-align: left;	
width: 96%;
padding-left: 15px;
background-color: rgba(0, 0, 0, 0.4);

@media (min-width: 768px) {
  max-width: 300px;
}
` 


function Card({id, label, title, cover}) {
  return (
    <CardContainer>
      <CardWrapper>
        <CardLabel>{label}</CardLabel>
        <CardImage src={cover} alt=" photo du logement en question" />
          <figcaption>{title}</figcaption>
      </CardWrapper>
    </CardContainer>
)
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
}

Card.defaultProps = {
  label:'',
  title:'',
  cover:'',
}
export default Card;
