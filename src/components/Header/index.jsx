import { Link } from 'react-router-dom';
import logo from '../../assets/petitLogo.png'
import styled from 'styled-components'

const StyledNav = styled('nav')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px; 
    font-family: Montserrat;
`

const StyledUl = styled('ul')`
    display: flex;
    gap: 20px;
    padding-top: 28px;
    padding-left: 0;
    padding-right: 2%;
    font-size: 12px;

    @media (min-width: 768px) {
        font-size: 24px;
    }
`

const StyledLink = styled(Link)`
    color: rgba(255, 96, 96, 1);
    text-transform: uppercase;
    text-decoration: none;
    &:hover, 
    &:focus {
        cursor: pointer;
        text-decoration: underline;
    }
    &:active {
         text-decoration: underline;
    }
   

    @media (min-width: 768px) {
        text-transform: none;
    }
`

const StyledLi = styled('li')`
    list-style-type: none;
`
const StyledImg = styled('img')`
    width: auto;
    height: 46px;
    padding-left: 2%;
    padding-top: 20px;
`

function Header() {
    return (
        <StyledNav>
            <StyledImg src={logo} alt="Logo du site Kasa" />
            <StyledUl>
                <StyledLi><StyledLink to="/">Accueil</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/about">À propos</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}

export default Header;
