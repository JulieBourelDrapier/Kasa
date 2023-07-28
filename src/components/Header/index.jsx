import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

function Header() {
    return (
        <nav>
            <img src={logo} alt="Logo du site Kasa" />
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">À propos</Link></li>
                <li><Link to="/accommodations">Locations</Link></li>
            </ul>
        </nav>
    );
}

export default Header;
