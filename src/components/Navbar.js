import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar d-flex col-10">
            <div className="logo">RootKoro</div>
            <div className="row-right nav-links" id='nav-links'>
                <Link to="/new_cv/accueil">accueil</Link>
                <Link to="/new_cv/projets">projets</Link>
                <Link to="/new_cv/contact">contact</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;