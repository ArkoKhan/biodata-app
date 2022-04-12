import logo from "./logo.svg";
import "./App.css";
import BioData from "./components/BioData";

function App() {
  return (
    <div className="App">
      <BioData
        name="Arko Khan"
        email="arko@khan.com"
        skills={["HTML", "CSS"]}
        Interests={["CSS", "JS"]}
        recomand="Hasin Khan"
      />

      <BioData
        name="Hasin Khan"
        email="hasin@khan.com"
        skills={["CSS", "HTML", "JS"]}
        Interests={["CSS", "HTML", "WP", "JS"]}
        recomand="Sadab Khan"
      />
    </div>
  );
}

export default App;
