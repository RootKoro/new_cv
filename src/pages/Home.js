import { Link } from 'react-router-dom';

// import pic from "../assets/pic.jpeg";

import logo from "../assets/logo.png"

const Home = () => {
    const company_name = "Cyr Mathieu GUEYE"
    const company_link = "https://www.galsendigitalagency.com"
  
    return (
        <div className="pb-5 mb-5 container column text-center">
            <img width="500" src={logo} alt={company_name} title={company_name} />
            <h1>I'm {company_name} </h1>
            <h2>Welcome on my CV</h2>

            <section>
                <p>
                    Hello you, f you're reading this, you maybe intend to read my online CV to know better about my developper skills or to get a better point of view about me.
                </p>
                <p>
                    If that's the case, then <Link to="/new_cv/services">Click here !</Link>
                </p>
                <p>
                    To get an overview the place I work, click on the link below
                </p>
                <a href={company_link} target="blank"><button> Check our website </button></a>
            </section>
        </div>
    );
}
 
export default Home;