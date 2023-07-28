import { PropTypes } from 'prop-types'

// import styled from 'styled-components'
// import DefaultPicture from '../assets/faussephoto.jpg'

// const CardLabel = styled.span`
// color: #5843e4;
// font-size: 22px;
// font-weight: bold;
// ` 
// const CardImage = styled.img`
// width: 80px;
// height: 80px;
// border-radius: 50%;
// `

function Card({label, title, picture}) {
  return (
    <div style={{display: 'flex', flexDirection: 'column', padding: '15'}}>  
         <span>{label}</span>
        <img src={picture} alt="logement en question" height={80} width={80} />
        <span>{title}</span>
    </div>
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
