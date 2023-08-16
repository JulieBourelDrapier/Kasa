import { Link } from 'react-router-dom';
import logo from '../assets/petitLogo.png'
import styled from 'styled-components'

const Hdr = styled('header')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px; 
    margin: 20px;

    @media (min-width: 768px) {
        margin: 38px 92px;
    }
`

const Logo = styled('img')`
    width: auto;
    height: 46px;
`

const NavBar = styled('ul')`
    display: flex;
    gap: 25px;
    padding-top: 20px;
    font-size: 12px;

    @media (min-width: 768px) {
        font-size: 20px;
    }

    @media (min-width: 1200px) {
        font-size: 24px; 
    }
`

const NavLink = styled(Link)`
    color: rgba(255, 96, 96, 1);
    text-transform: uppercase;

    @media (min-width: 768px) {
        text-transform: none;
    }
`



function Header() {
    return (
        <Hdr>
            <Logo src={logo} alt="Logo du site Kasa" />
            <NavBar>
                <li><NavLink to="/">Accueil</NavLink></li>
                <li><NavLink to="/about">À propos</NavLink></li>
            </NavBar>
        </Hdr>
    );
}

export default Header;
