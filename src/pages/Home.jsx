import Contact from './Contact';
import Services from './Services';
import Works from './Works';

const Home = () => {
    
    const homeComponent = (
        <div className="container">
            <Services></Services>
            <Works></Works>
            <Contact></Contact>
        </div>
    );

    return homeComponent;
}

export default Home;