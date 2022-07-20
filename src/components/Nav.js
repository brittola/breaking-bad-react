import { Link } from 'react-router-dom';

function Nav() {

    return (
        <nav>
            <Link style={{ textDecoration: 'none' }} to="/"><h1>.</h1></Link>
            <ul>
                <Link style={{ textDecoration: 'none' }} to="/characters"><li>Characters</li></Link>
                <Link style={{ textDecoration: 'none' }} to="/episodes"><li>Episodes</li></Link>
                <Link style={{ textDecoration: 'none' }} to="/quotes"><li>Quotes</li></Link>
            </ul>
        </nav>
    )

}

export default Nav;