import error404 from '../../assets/404.png'
import styled from 'styled-components';

const ErrorWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Montserrat;
  color: #ff6060;
  gap: 113px;
`

const ErrorImage = styled.img`
  padding-top: 113px;
  width: auto;
  height: 99px;

`

const ErrorMessage = styled.p`
  text-align: center;
  font-size: 24px;
`
const ErrorLink = styled.a`
 padding-bottom: 113px;
`

function Error() {
  return (
      <ErrorWrapper>
        <ErrorImage src={error404} alt="Erreur 404" />
          <ErrorMessage>Oups! La page que vous demandez n'existe pas.</ErrorMessage>
            <ErrorLink>Retournez sur la page d'accueil</ErrorLink>
      </ErrorWrapper>
  )
}

export default Error