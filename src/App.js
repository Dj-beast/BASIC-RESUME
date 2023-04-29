import Top from "./Components/Top"
import './App.css';
import Summary from "./Components/Summary";
import Education from "./Components/Education";
import Language from "./Components/Language";
import Skills from "./Components/Skills"
import Codinglang from "./Components/Codinglang";
import Experience from "./Components/Experience";
import Projetcs from "./Components/Projetcs";
import Certification from "./Components/Certification";
import Profiles from "./Components/Profiles";

function App() {
  return (
    <div className="App">
      <Top ></Top>
      <Summary></Summary>
      <Education></Education>
      <Language></Language>
      <Skills></Skills>
      <Codinglang></Codinglang>
      <Experience></Experience>
      <Projetcs></Projetcs>
      <Certification></Certification>
      <Profiles></Profiles>
    </div>
  );
}

export default App;
