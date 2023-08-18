import { PropTypes } from 'prop-types'
import styled from 'styled-components' 

const CardFigure = styled('figure')` 
position: relative;
&:hover
&:focus {
  cursor: pointer;
}
`

const CardCover = styled('img')`
width: 100%;
border-radius: 10px;
height: 255px;	

@media (min-width: 500px) {
  height: 340px;
}
`
const CardFigcaption = styled('figcaption')`
color: #fff;
font-size: 15px;
position: absolute;
bottom: 4px;
border-radius: 0 0 10px 10px;
width: 100%;
padding: 9px;	
background-color: rgba(0, 0, 0, 0.5);
box-sizing: border-box;
min-height: 45px;

@media (min-width: 768px) {
  padding: 4px;
}

@media (min-width: 1200px) {
  padding: 5px;
}
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
