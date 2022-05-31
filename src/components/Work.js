import C from "../assets/C.png"
import CSS3 from "../assets/CSS3.png"
import debian from "../assets/debian.png"
import git from "../assets/git.png"
import github from "../assets/github.png"
import html from "../assets/html.png"
import laravel from "../assets/laravel.png"
import NodeJs from "../assets/NodeJs.png"
import Python from "../assets/Python.png"
import TypeScript from "../assets/TypeScript.png"
import Ubuntu from "../assets/Ubuntu.png"
import windows from "../assets/windows.png"

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
            <h4>Luhn Code</h4>,
            <p>
                Luhn code generator and checker. <br />
                <img src={windows} alt="windows" className="prog-logo" />
                <img src={TypeScript} alt="typescript" className="prog-logo" />
                <img src={git} alt="git" className="prog-logo" />
            </p>,
            <a href="https://github.com/RootKoro/Luhn" target="_blank" rel="noreferrer">
                click here
                <img src={github} alt="git" className="prog-logo" />
            </a>
        ],
        [
            <h4>Match Sticks</h4>,
            <p>
                MatchStick game you can play either against a the computer or against a physical opponent (not finished yet). <br />
                <img src={Python} alt="python" className="prog-logo" />
                <img src={Ubuntu} alt="ubuntu" className="prog-logo" />
                <img src={git} alt="git" className="prog-logo" />
            </p>,
                <a href="https://github.com/RootKoro/matchStick" target="_blank" rel="noreferrer">
                click here
                <img src={github} alt="git" className="prog-logo" />
            </a>
        ],
        [
            <h4>Firtree</h4>,
            <p>
                draw a firtree with a given size (incomplet). <br />
                <img src={TypeScript} alt="typescript" className="prog-logo" />
                <img src={git} alt="git" className="prog-logo" />
                <img src={debian} alt="debian" className="prog-logo" />
            </p>,
            <a href="https://github.com/RootKoro/firtree" target="_blank" rel="noreferrer">
                click here
                <img src={github} alt="git" className="prog-logo" />
            </a>
        ],
        [
            <h4>Buble Tea</h4>,
            <p>
                Bubble tea online shop (not finished yet). <br />
                <img src={laravel} alt="laravel" className="prog-logo" />
                <img src={html} alt="html5" className="prog-logo" />
                <img src={Ubuntu} alt="ubuntu" className="prog-logo" />
                <img src={CSS3} alt="css3" className="prog-logo" />
                <img src={debian} alt="debian" className="prog-logo" />
                <img src={windows} alt="windows" className="prog-logo" />
                <img src={git} alt="git" className="prog-logo" />
            </p>,
            <a href="https://github.com/RootKoro/bubbleTea" target="_blank" rel="noreferrer">
                click here
                <img src={github} alt="git" className="prog-logo" />
            </a>
        ],
        [
            <h4>IRC-like Client</h4>,
            <p>
                A chat in the commande line (not finished yet). <br />
                <img src={TypeScript} alt="typescript" className="prog-logo" />
                <img src={windows} alt="windows" className="prog-logo" />
                <img src={NodeJs} alt="node.js" className="prog-logo" />
                <img src={Ubuntu} alt="ubuntu" className="prog-logo" />
                <img src={git} alt="git" className="prog-logo" />
                <img src={debian} alt="debian" className="prog-logo" />
            </p>,
            <a href="https://github.com/RootKoro/IRC-client" target="_blank" rel="noreferrer">
                click here
                <img src={github} alt="git" className="prog-logo" />
            </a>
        ],
        [
            <h4>RPG</h4>,
            <p>
                RPG in the (modified) word of ETNA (not finished yet). <br />
                <img src={C} alt="git" className="prog-logo" />
                <img src={debian} alt="git" className="prog-logo" />
                <img src={windows} alt="git" className="prog-logo" />
                <img src={Ubuntu} alt="git" className="prog-logo" />
                <img src={git} alt="git" className="prog-logo" />
            </p>,
            <a href="https://github.com/RootKoro/RPG" target="_blank" rel="noreferrer">
                click here
                <img src={github} alt="git" className="prog-logo" />
            </a>
        ],
        [
            <h4>Dynamic list's functions</h4>,
            <p>
                Some template functions for dynamic lists in C. <br />
                <img src={C} alt="git" className="prog-logo" />
                <img src={windows} alt="git" className="prog-logo" />
                <img src={git} alt="git" className="prog-logo" />
            </p>,
            <a href="https://github.com/RootKoro/C_dynamic_list" target="_blank" rel="noreferrer">
                click here
                <img src={github} alt="git" className="prog-logo" />
            </a>
        ]
    ]

    return (
        <main className="main-blocks" id="works">
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