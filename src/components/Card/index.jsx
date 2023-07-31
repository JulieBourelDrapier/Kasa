import { PropTypes } from 'prop-types'
import styled from 'styled-components'


const CardLabel = styled('span')`
color: #fff;
font-size: 22px;
font-weight: bold;
` 
const CardImage = styled('img')`
width: 335px;
height: 255px;
border-radius: 10px;
`
const CardWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: rgba(246, 246, 246, 1);
  color: white;
  border-radius: 10px;
  min-width: 300px;
  widht: 80%;
  &:hover {
    cursor: pointer;
  }
`

function Card({label, title, cover}) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={cover} alt=" photo du logement en question" />
        <span>{title}</span>
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
