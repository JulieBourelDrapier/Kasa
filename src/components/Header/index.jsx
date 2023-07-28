import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
`

const StyledLi = styled('li')`
    margin: 15px;
`

function Header() {
    return (
        <nav>
            <img src={logo} alt="Logo du site Kasa" />
            <ul>
                <StyledLi><StyledLink to="/">Accueil</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/about">À propos</StyledLink></StyledLi>
            </ul>
        </nav>
    );
}

export default Header;
