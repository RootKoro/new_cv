import { useEffect, useState } from "react"

import pic from "../assets/pic.jpg"
import Contact from './Contact';
import Services from './Services';
import Works from './Works';

const Home = () => {
    const user_name = "Cyr Mathieu GUEYE"
    const company_link = "https://www.galsendigitalagency.com"
    
    const homeComponent = (
        <div className="container">
            <Services></Services>
            <Works></Works>
            <Contact></Contact>
        </div>
    );

    const [htmlContent, setHtmlContent] = useState(
        <div className="pb-5 mb-5 container column text-center" >
            <div className='separator'></div>
            <div className='row'>
                <img width="350" src={pic} alt={user_name} title={user_name} />
                <div className='separator'></div>
                <div className='column'>
                    <h1 > Salut saluuuut, </h1>
                    <h1 > I 'm {user_name} </h1>
                    <h2 > Bienvenu dans mon fabuleux monde jovial </h2>
                    <section >
                        <p>
                            Vous êtes Curieux : <br />
                            A propos de <button type='button' className='link-like' id='moi' onClick={() => { setHtmlContent(homeComponent); }} >🤩 MOI 🥳</button> <br /> ?
                            A propos de la <a href={company_link} target="blank" >"Galsen Digital Agency"</a> ?
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );

    useEffect(() => console.log(htmlContent), [htmlContent])


    return htmlContent;
}

export default Home;