// import lf221 from "../assets/lf221.png"
// import mossane from "../assets/mossane.png"

const projectElts = (element) => {
    return (<p> {element} </p>);
}

const projectToHtml = (element) => {
    return (
        <div className="container d-flex">
            <div className="col-sm-1">
                { element.map(e => projectElts(e)) }
            </div>
            <div className="col-1"></div>
        </div>
    );
}

const Work = () => {
    const projects = [['name', 'description', 'links'], ['name', 'description', 'links']]

    return (
        <main className="main-blocks">
            <section className="first-section d-flex">
                <div className="col-1"></div>
                <div className="container">
                    <h3>Des projets sur lesquels j'ai eu à travailler</h3>
                    <div className="d-flex">
                        { projects.map(e => projectToHtml(e)) }
                    </div>
                    {/* <div className="h-150">
                        <a href="https://www.lafrancoise221.com" target="_blank" rel="noopener noreferrer">
                            <img width="250" src={lf221} alt="https://www.lafrancoise221.com" title="La Françoise 221" />
                        </a>
                    </div> */}
                </div>
                <div className="col-1"></div>
                <div className="col-4 h-200">
                    {/* <p>pas encore de projet personnel hébergé hormis ce cv</p>
                    <div className="h-150">
                        <a href="https://www.mossanegroup.com" target="_blank" rel="noopener noreferrer">
                            <img width="275" src={mossane} alt="https://www.mossanegroupe.com" title="Mossane patrimoine" />
                        </a>
                    </div> */}
                </div>
            </section>
        </main>
    );
}
 
export default Work;