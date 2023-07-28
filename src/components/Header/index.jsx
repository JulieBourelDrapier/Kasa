import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
`

function Header() {
    return (
        <nav>
            <img src={logo} alt="Logo du site Kasa" />
            <ul>
                <li><StyledLink to="/">Accueil</StyledLink></li>
                <li><StyledLink to="/about">À propos</StyledLink></li>
            </ul>
        </nav>
    );
}

export default Header;
