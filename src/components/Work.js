const projectElts = (element) => {
    return (<p> {element} </p>);
}

const projectToHtml = (element) => {
    return (
        <div className="col-5 bordered">
            { element.map(e => projectElts(e)) }
        </div>
    );
}

const Work = () => {
    const projects = [
        [
            <h4>Code de Luhn</h4>,
            <p>
                Permet de générer un code ou de vérifier si le code passé est un code de luhn.
                <ul>
                    <li>TypeScript</li>
                    <li>Windows</li>
                    <li>Git</li>
                </ul>
            </p>,
            <a href="https://github.com/RootKoro/Luhn" target="_blank" rel="noreferrer">
                https://github.com/RootKoro/Luhn
            </a>
        ],
        [
            <h4>Match Sticks</h4>,
            <p>
                Jeu des allumettes soit à deux, soit contre l'ordinateur.
                <ul>
                    <li>Python</li>
                    <li>Ubuntu</li>
                    <li>Git</li>
                </ul>
            </p>,
            <a href="https://github.com/RootKoro/matchStick" target="_blank" rel="noreferrer">
                https://github.com/RootKoro/matchStick
            </a>
        ],
        [
            <h4>Firtree</h4>,
            <p>
                Dessine un sapin en fonction de la taille passée (incomplet).
                <ul>
                    <li>TypeScript</li>
                    <li>Debian</li>
                    <li>Git</li>
                </ul>
            </p>,
            <a href="https://github.com/RootKoro/firtree" target="_blank" rel="noreferrer">
                https://github.com/RootKoro/firtree
            </a>
        ],
        [
            <h4>Buble Tea</h4>,
            <p>
                Boutique en ligne de bubble tea (en cours).
                <ul>
                    <li>Laravel</li>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Windows</li>
                    <li>Ubuntu</li>
                    <li>Debian</li>
                    <li>Git</li>
                    <li>Scrum</li>
                </ul>
            </p>,
            <a href="https://github.com/RootKoro/bubbleTea" target="_blank" rel="noreferrer">
                https://github.com/RootKoro/bubbleTea
            </a>
        ],
        [
            <h4>IRC-like Client</h4>,
            <p>
                Chat instantané dans le terminal (en cours).
                <ul>
                    <li>TypeScript</li>
                    <li>NodeJs</li>
                    <li>Windows</li>
                    <li>Ubuntu</li>
                    <li>Debian</li>
                    <li>MacOS</li>
                    <li>Git</li>
                    <li>Scrum</li>
                </ul>
            </p>,
            <a href="https://github.com/RootKoro/IRC-client" target="_blank" rel="noreferrer">
                https://github.com/RootKoro/IRC-client
            </a>
        ],
        [
            <h4>RPG</h4>,
            <p>
                RPG interactif qui vous plonge dans l'univers très modifié de le l'ETNA (en cours).
                <ul>
                    <li>C</li>
                    <li>Debian</li>
                    <li>Ubuntu</li>
                    <li>Windows</li>
                    <li>Git</li>
                </ul>
            </p>,
            <a href="https://github.com/RootKoro/RPG" target="_blank" rel="noreferrer">
                https://github.com/RootKoro/RPG
            </a>
        ],
        [
            <h4>Raccourcies listes dynamiques</h4>,
            <p>
                Des fonctions "templates" permettant la gestion de liste chainées.
                <ul>
                    <li>C</li>
                    <li>Windows</li>
                    <li>Git</li>
                </ul>
            </p>,
            <a href="https://github.com/RootKoro/C_dynamic_list" target="_blank" rel="noreferrer">
                https://github.com/RootKoro/C_dynamic_list
            </a>
        ]
    ]

    return (
        <main className="main-blocks">
            <section className="first-section">
                <div className="container">
                    <h3>My projects</h3><br />
                    <div className="container d-flex">
                        { projects.map(e => projectToHtml(e)) }
                    </div>
                </div>
            </section>
        </main>
    );
}
 
export default Work;