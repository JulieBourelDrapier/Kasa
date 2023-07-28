import { PropTypes } from 'prop-types'
import styled from 'styled-components'
// import DefaultPicture from '../assets/faussephoto.jpg'


const CardLabel = styled.span`
color: #5843e4;
font-size: 22px;
font-weight: bold;
` 
const CardImage = styled.img`
width: 80px;
height: 80px;
border-radius: 50%;
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #ff6060 ;
  color: white;
  border-radius: 10px;
  min-width: 300px;
  widht: 80%;
  transition: 200ms;
  &:hover {
    cursor: pointer;
  }
`

function Card({label, title, picture}) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="logement en question" />
        <span>{title}</span>
    </CardWrapper>
)
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired
}

Card.defaultProps = {
  label:'',
  title:'',
  picture: '',
}
export default Card;
