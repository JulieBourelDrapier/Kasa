import logo from '../../assets/logoFooter.png'
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center; 
  align-items: center;
  width: 100%;
  background-color: #000;
  margin: 0;
`;

const FooterImage = styled.img`
 object-fit: cover;
 text-align: center;	
`;

function Footer() {
  return (
      <FooterWrapper>
          <FooterImage src={logo} alt="logo du site Kasa"/>
      </FooterWrapper>
  );
}

export default Footer;
