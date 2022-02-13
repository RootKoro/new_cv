import "./styles/start/starter.css";
import "./styles/start/grid.css";
import "./styles/start/colors.css";
import "./styles/start/spacing.css";
import "./styles/start/text.css";
import "./styles/start/breakpoints.css";
import "./styles/start/flexbox.css";

import "./styles/style.css";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="pb-5 mb-5 container column text-center">
      <Footer />

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/new_cv" element={<Home />} />
          <Route path="/accueil" element={<Services />} />
          <Route path="/projets" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;