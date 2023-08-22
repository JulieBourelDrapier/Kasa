
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
min-height: 340px;	
position: relative;

`

const CardDiv = styled('div')`
position: relative;
display: inline-block;
width: 100%;

&::after {
  content: "";
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 99%;
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.6));
  opacity: 0.7;
  border-radius: 10px;
}
`

const CardFigcaption = styled('figcaption')`
color: #fff;
font-size: 18px;
position: absolute;
bottom: 4px;
border-radius: 0 0 10px 10px;
width: 83%;
padding: 15px;
box-sizing: border-box;

@media (min-width: 768px) {
  width: 100%;
  font-size: 17px;
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
