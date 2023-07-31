import { Link } from 'react-router-dom';
import logo from '../../assets/petitLogo.png'
import styled from 'styled-components'

const StyledNav = styled('nav')`
    display: flex;
    flex-direction: row;
    gap: 25px;
    text-align: center;
`

const StyledUl = styled('ul')`
    display: flex;
    flex-direction: row;
`

const StyledLink = styled(Link)`
    color: rgba(255, 96, 96, 1);
    text-decoration: none;
    font-size: 18px;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
`

const StyledLi = styled('li')`
    margin: 15px;
    list-style-type: none;
`
const StyledImg = styled('img')`
    width: 145px;
    height: 46px;
    padding-left: 20px;
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
