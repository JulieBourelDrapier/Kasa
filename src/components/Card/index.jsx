import { PropTypes } from 'prop-types'
import styled from 'styled-components'


const CardContainer = styled('article')`

@media (min-width: 768px) {
  background-color: rgba(246, 246, 246, 1); 
}
`

const CardLabel = styled('h4')`
` 

const CardFigure = styled('figure')`
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;
// width: 100%;
// margin-top: 27px;
position: relative;
margin-bottom: 20px;
&:hover
&:focus {
  cursor: pointer;
}

@media (min-width: 768px) {
  flex-direction: row;
  gap: 4%; 
  padding-left: 4%;
  padding-right: 4%;
  justify-content: space-around;
  flex-wrap: wrap;

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
font-size: 18px;
font-weight: 500;
position: absolute;
// top: 210px;
text-align: left;	
// min-width: 96%;
padding-left: 15px;
background-color: rgba(0, 0, 0, 0.4);

@media (min-width: 768px) {
  width: auto;
`


function Card({id, label, title, cover}) {
  return (
    <CardContainer>
      <CardLabel>{title}</CardLabel>
         <CardFigure>
          <CardFigcaption>{label}</CardFigcaption>
          <CardCover src={cover} alt=" photo du logement en question" />
        </CardFigure>  
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
