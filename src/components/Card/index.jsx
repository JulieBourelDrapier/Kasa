import { PropTypes } from 'prop-types'
import styled from 'styled-components'


const CardContainer = styled('article')`
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

const CardWrapper = styled('div')`
  margin-top: 27px;
  position: relative;
  margin-bottom: 20px;
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
  max-height: 340px;
}
`

const CardLabel = styled('figcaption')`
  font-family: Montserrat;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  top: 210px;
  text-align: left;	
  width: 96%;
  padding-left: 15px;
  background-color: rgba(0, 0, 0, 0.4);

  @media (min-width: 768px) {
    width: auto;
  }
` 


function Card({id, label, title, cover}) {
  return (
    <CardContainer>
      <CardWrapper>
        <CardLabel>{label}</CardLabel>
        <CardCover src={cover} alt=" photo du logement en question" />
          <figcaption>{title}</figcaption>
      </CardWrapper>
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
