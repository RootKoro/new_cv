import Contact from './Contact';
import Services from './Services';
import Works from './Works';

const Home = () => {
    
    const homeComponent = (
        <div className="container">
            <nav className="navbar d-flex col-10">
                <div className="logo">RootKoro</div>
                <div className="row-right nav-links" id='nav-links'>
                    <a href="#services">accueil</a>
                    <a href="#works">projets</a>
                    <a href="#contact">contact</a>
                </div>
            </nav>
            <Services></Services>
            <Works></Works>
            <Contact></Contact>
        </div>
    );

    return homeComponent;
}

export default Home;