
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className='nav'>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link to='/user/about' >
                    <li>About</li>
                </Link>
                <Link to='/user/shop'>
                    <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
