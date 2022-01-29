import "./styles/start/starter.css";
import "./styles/start/grid.css";
import "./styles/start/colors.css";
import "./styles/start/spacing.css";
import "./styles/start/text.css";
import "./styles/start/breakpoints.css";
import "./styles/start/flexbox.css";

import "./styles/style.css";

import logo from "./assets/logo.png";

import Footer from "./components/Footer";

function App() {
  const company_name = "Galsen Digital Agency"
  const company_link = "https://www.galsendigitalagency.com"

  return (
    <div className="pb-5 mb-5 container column text-center">
      <img width="250" src={logo} alt={company_name} title={company_name} />
      <h1>
        {company_name}
      </h1>
      <h2>
        This is your react quick start
      </h2>
      <section>
        <p>
          We are a digital agency specializing in the creation of software. We support you during the digitalization process of your company.
        </p>
        <a href={company_link} target="blank"><button> Check our website </button></a>
      </section>
      <Footer />
    </div>
  );
}

export default App;