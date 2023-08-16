import styled from 'styled-components';
import mobileImg from '../assets/logoFooter.png'
import desktopImg from '../assets/biglogofooter.png'
import desktopText from '../assets/textfooter.png'


const FooterWrapper = styled.footer`
  width: auto;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterImage = styled.img`
  object-fit: cover;
  text-align: center;	
`;

const BigLogoFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledFooter = styled.div`
  justify-content: center; 
  align-items: center;
  width: 100%;
  background-color: #000;
  margin: 0;

  @media (max-width: 767px) {
    ${FooterImage}{
      display: block;
    }

     ${BigLogoFooter}{
      display: none;
      }
    }

  @media (min-width: 768px) {
     ${FooterImage}{
      display: none;
    }

     ${BigLogoFooter}{
      display: flex;
      flex-direction: column;
      gap: 28px;
     }
  }
`;

// Render the Footer component
function Footer() {
  return (
    <StyledFooter>
        <FooterWrapper>
            <FooterImage src={mobileImg} alt="mobile version" />
            <BigLogoFooter>
              <img src={desktopImg} alt="Logo du site version desktop" />
              <img src={desktopText} alt="Logo du site version desktop (copyright et texte additionnel)" />
            </BigLogoFooter>
        </FooterWrapper>
    </StyledFooter>
  );
}

export default Footer;