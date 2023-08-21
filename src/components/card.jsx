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
position: relative;

@media (min-width: 500px) {
  height: 340px;
}
`
const CardDiv = styled('div')`
position: relative;
display: inline-block;

&::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 99%;
  background: linear-gradient(10deg, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0.5) 50%, #ff6060 100%);
  opacity: 0.6;
  border-radius: 10px;
}
`

const CardFigcaption = styled('figcaption')`
color: #fff;
font-size: 15px;
position: absolute;
bottom: 4px;
border-radius: 0 0 10px 10px;
width: 70%;
padding: 9px;
box-sizing: border-box;
// height: 100%;

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
          <CardDiv>
            <CardCover src={cover} alt=" photo du logement en question" />
          </CardDiv>
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
