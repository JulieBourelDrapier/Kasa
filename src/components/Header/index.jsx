import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <img src="assets/logokasa.png" alt="Logo du site Kasa" />
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/about">À propos</Link></li>
            </ul>
        </nav>
    );
}

export default Header;
