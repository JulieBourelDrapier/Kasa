import { PropTypes } from 'prop-types'
import styled from 'styled-components'

const CardWrapper = styled('card')`
  margin-top: 27px;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  min-width: 300px;
  widht: 80%;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }

  @media (min-width: 768px) {
    background-color: rgba(246, 246, 246, 1);
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
` 


function Card({label, title, cover}) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={cover} alt=" photo du logement en question" />
        <figcaption>{title}</figcaption>
    </CardWrapper>
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
