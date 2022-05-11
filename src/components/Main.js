import picture from "../assets/picture.jpg"
import bash from "../assets/bash.png"
import C from "../assets/C.png"
import CSS3 from "../assets/CSS3.png"
import debian from "../assets/debian.png"
import docker from "../assets/docker.png"
import git from "../assets/git.png"
import github from "../assets/github.png"
import gitlab from "../assets/gitlab.png"
import html from "../assets/html.png"
import JS from "../assets/JS.png"
import mysql from "../assets/mysql.png"
import NodeJs from "../assets/NodeJs.png"
import oracle from "../assets/oracle.png"
import PHP from "../assets/PHP.png"
import Python from "../assets/Python.png"
import reactlogo from "../assets/reactlogo.png"
import TypeScript from "../assets/TypeScript.png"
import Ubuntu from "../assets/Ubuntu.png"
import windows from "../assets/windows.png"

const progElts = (element) => {
    return (
        <div>
            {element}
        </div>
    )
}

const Main = () => {
    let author_name = "Cyr Mathieu GUEYE";
    let langages = [
        <img src={bash} alt="bash" className="prog-logo" width="64" />,
        <img src={C} alt="c" className="prog-logo" width="64" />,
        <img src={CSS3} alt="css" className="prog-logo" width="64" />,
        <img src={debian} alt="deb" className="prog-logo" width="64" />,
        <img src={docker} alt="dock" className="prog-logo" width="64" />,
        <img src={git} alt="git" className="prog-logo" width="64" />,
        <img src={github} alt="github" className="prog-logo" width="64" />,
        <img src={NodeJs} alt="nodejs" className="prog-logo" width="64" />,
        <img src={oracle} alt="oracle" className="prog-logo" width="64" />,
        <img src={gitlab} alt="gitlab" className="prog-logo" width="64" />,
        <img src={html} alt="html" className="prog-logo" width="64" />,
        <img src={TypeScript} alt="ts" className="prog-logo" width="64" />,
        <img src={JS} alt="js" className="prog-logo" width="64" />,
        <img src={mysql} alt="mysql" className="prog-logo" width="64" />,
        <img src={PHP} alt="php" className="prog-logo" width="64" />,
        <img src={Ubuntu} alt="ubuntu" className="prog-logo" width="64" />,
        <img src={Python} alt="python" className="prog-logo" width="64" />,
        <img src={reactlogo} alt="react" className="prog-logo" width="64" />,
        <img src={windows} alt="windows" className="prog-logo" width="64" />,
    ]
    return ( 
        <main className="main-blocks">
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