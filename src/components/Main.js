// import { Link } from 'react-router-dom';

import Navbar from "./Navbar";
import satoru_gojo3 from "../assets/satoru_gojo3.jfif"

const Main = () => {
    let author_name = "Cyr Mathieu";
    return ( 
        <main className="main-blocks">
            <Navbar/>
            <section className="main-first-section first-section row-reverse d-flex">
                <div className="col-6 cadre-img">
                    <img width="500" src={satoru_gojo3} alt={author_name} title={author_name} />
                </div>

                <div className="col-1"></div>

                <div className="col-4">
                    <h1>GUEYE</h1>
                    <h1>CYR MATHIEU</h1>

                    <p>développeur web Junior</p>
                </div>
            </section>
            <section className="main-second-section second-section d-flex">
                <div className="col-2">
                    <h5>Déjà</h5>
                    <h2>2 ans</h2>
                    <h6>d'expérience dans le monde du travail et de l'entreprise (en tant que développeur</h6>
                </div>
                <div className="col-1"></div>
                <div className="col-8">
                    <h5>Développeur Junior en alternance, spécialisé en développement web, avec des compétences assises en développement desktop</h5>
                    <div className="d-flex dev-section">
                        <div className="col-4 intern-div column-reverse">
                            <p>
                                Développeur desktop <br /> (backend)
                            </p>
                        </div>
                        <div className="col-4 intern-div column-reverse">
                            <p>
                                Développeur web <br /> (fullstack heavy back)
                            </p>
                        </div>
                        <div className="col-4 intern-div column-reverse">
                            <p>
                                Développeur mobile <br /> (en apprentissage)
                            </p>
                        </div>
                        {/* <Link to="#">
                            <button className='dev'>Développeur desktop</button>
                        </Link>
                        <Link to="#">
                            <button className='dev'>Développeur web back</button>
                        </Link>
                        <Link to="#">
                            <button className='dev'>Développeur web front</button>
                        </Link> */}
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default Main;