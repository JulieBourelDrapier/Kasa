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
  background-color: black;
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
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
