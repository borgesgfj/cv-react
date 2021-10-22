/* import logo from './logo.svg'; */
import About from "./About";
import Academic from "./Academic";
import "./App.css";
import Header from "./Header";
import ProfessioinalExperiences from "./ProfessionalExperience";
import ComputationalTools from "./ComputationalTools";
import SideBar from "./SideBar";

function App() {
  return (
    <div className="mainContainer">
      <Header name="Gilberto" lastName="Ferreira Borges Jr." />
      <div className="mainContent">
        <section id="informationSection">
          <About />
          <Academic />
          <ProfessioinalExperiences />
          <ComputationalTools />
        </section>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
