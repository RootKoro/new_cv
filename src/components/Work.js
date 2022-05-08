// import lf221 from "../assets/lf221.png"
// import mossane from "../assets/mossane.png"

const projectElts = (element) => {
    return (<p> {element} </p>);
}

const projectToHtml = (element) => {
    return (
            <div>
                { element.map(e => projectElts(e)) }
            </div>
    );
}

const Work = () => {
    const projects = [
        ['Code de Luhn', 'Permet de générer un code ou de vérifier si le code passé est un code de luhn. Projet réalisé en TypeScript', (<a href="https://github.com/RootKoro/Luhn">Git</a>)],
        ['Match Sticks', 'Jeu des allumettes soit à deux, soit contre l\'ordinateur. Réalisé en Python', (<a href="https://github.com/RootKoro/matchStick">Git</a>)],
        ['Firtree', 'Dessine un sapin en fonction de la taille passée (incomplet). Réalisé en TypeScript', (<a href="https://github.com/RootKoro/firtree">Git</a>)],
        ['Buble Tea', 'Boutique en ligne de bubble tea (en cours). Réalisé en Laravel', (<a href="https://github.com/RootKoro/bubbleTea">Git</a>)],
        ['IRC-like Client', 'Chat instantané dans le terminal (en cours). Réalisé en TypeScript', (<a href="https://github.com/RootKoro/IRC-client"></a>)],
        ['RPG', 'RPG interactif qui vous plonge dans l\'univers très modifié de le l\'ETNA (en cours). Réalisé en C', (<a href="https://github.com/RootKoro/RPG">Git</a>)],
        ['Raccourcies listes dynamiques', 'Des fonctions "templates" permettant la gestion de liste chainées. Réalisé pour les listes en C', (<a href="https://github.com/RootKoro/C_dynamic_list">Git</a>)]
    ]

    return (
        <main className="main-blocks">
            <section className="first-section d-flex">
                <div className="col-1"></div>
                <div className="container-junior">
                    <h3>Des projets sur lesquels j'ai eu à travailler</h3>
                    <div>
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