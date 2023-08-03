import styled from 'styled-components';
import mobileImg from '../../assets/logoFooter.png'
import desktopImg from '../../assets/biglogofooter.png'
import desktopText from '../../assets/textfooter.png'


const FooterWrapper = styled.div`
  background-color: #fff;
  width: 100%;
`;

const FooterImage = styled.img`
  fit: cover;
  border-radius: 40px;
`;

const BigLogoFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
`;

const StyledFooter = styled.div`

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
      display: block;
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