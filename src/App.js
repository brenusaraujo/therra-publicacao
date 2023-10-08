import "./App.css";
import Home from "./Components/Home";
import Servicos from "./Components/Servicos";
import Projetos from "./Components/Projetos";
import Assistencia from "./Components/Assistencia";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ConstruirLares from "./Components/ConstruirLares"
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'GTM-PXG4FM9B'
}
TagManager.initialize(tagManagerArgs)

function App() {
  return (
    <div className="App">
      <Home />
      <Servicos />
      <ConstruirLares />
      <Projetos />
      <Assistencia />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
