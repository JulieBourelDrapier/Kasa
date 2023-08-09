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

@media (min-width: 768px) {
  height: 340px;
}
`
const CardFigcaption = styled('figcaption')`
font-family: Montserrat;
color: #fff;
font-size: 16px;
font-weight: 500;
position: absolute;
bottom: 5px;
// border-radius: 10px;
// widht: 100%;
text-align: left;	
// min-width: 96%;
padding-left: 15px;
background-color: rgba(0, 0, 0, 0.4);

@media (min-width: 768px) {
  width: auto;
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
