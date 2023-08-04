import { PropTypes } from 'prop-types'
import styled from 'styled-components'


const CardSection = styled('section')`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 

  @media (min-width: 768px) {
      background-color: rgba(246, 246, 246, 1);
      flex-direction: row; 
      justify-content: space-around;
      flex-wrap: wrap;
    }
`

const CardDiv = styled('div')`
  margin-top: 27px;
  position: relative;
  margin-bottom: 20px;
  &:hover {
    cursor: pointer;
  }
`

const CardCover = styled('img')`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  max-height: 255px;

  @media (min-width: 768px) {
    max-height: 340px;
  }
`

const CardTitle = styled('h3')`
// font-family: Montserrat;
// color: #fff;
// font-size: 18px;
// font-weight: 500;
// position: absolute;
// border-radius: 10px;
// top: 210px;
// text-align: left;	
// width: 96%;
// padding-left: 15px;
// background-color: rgba(0, 0, 0, 0.4);

// @media (min-width: 768px) {
//   max-width: 300px;
// }
` 
const CardLabel = styled('p')`
  color : #fff;
  font-size: 44px;
`


function Card({id, label, title, cover}) {
  return (
    <CardSection>
        <CardDiv>
            <CardCover src={cover} alt=" photo du logement en question" />
            <CardTitle>{title}</CardTitle>  
            <CardLabel>{label}</CardLabel>
        </CardDiv>
    </CardSection>
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
