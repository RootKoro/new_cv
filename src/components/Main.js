import picture from "../assets/picture.jpg"

const Main = () => {
    let author_name = "Cyr Mathieu GUEYE";
    return ( 
        <main className="main-blocks" id="services">
            {/* <section className="main-second-section second-section d-flex">
                <div className="container">
                    <div className="d-flex dev-section container">
                        {langages.map(e => progElts(e))}
                    </div>
                </div>
            </section> */}
            <section className="main-first-section first-section row-reverse d-flex">
                <div className="col-6 cadre-img">
                    <img width="250" src={picture} alt={author_name} title={author_name} />
                </div>
                <div className="col-1"></div>
                <div className="col-4">
                    <h2>Hellooo,</h2> <br />
                    <h1>I'm {author_name}</h1> <br />
                    <h4>
                        A Young Fullstack Web Developer, looking for an alternanting contract, specialized in web devlopment with some desktop devlopment skills.
                    </h4>
                </div>
                {/* <h5>Young developer looking for an alternanting contract, specialized in web devlopment with some desktop devlopment skills</h5> */}
            </section>
        </main>
    );
}
 
export default Main;