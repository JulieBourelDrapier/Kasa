import { PropTypes } from 'prop-types'
import styled from 'styled-components' 

const CardFigure = styled('figure')`
margin: 0;
position: relative;
&:hover
&:focus {
  cursor: pointer;
}
`

const CardCover = styled('img')`
width: 100%;
border-radius: 10px;
object-fit: cover;

@media (min-width: 500px) {
  height: 340px;
}
`
const CardFigcaption = styled('figcaption')`
color: #fff;
font-size: 12px;
position: absolute;
bottom: 4px;
border-radius: 0 10px 0 10px;
width: 62%;
padding: 9px;	
background-color: rgba(0, 0, 0, 0.5);
box-sizing: border-box;

@media (min-width: 500px) {
  font-size: 15px;
  width: 47%;
  padding: 10px;
}

@media (min-width: 768px) {
  width: 62%;
`


function Card({id, label, title, cover}) {
  return (
         <CardFigure>
          <CardCover src={cover} alt=" photo du logement en question" />
          <CardFigcaption>{label}</CardFigcaption>
        </CardFigure> 
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
