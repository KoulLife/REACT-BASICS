import {CORE_CONCEPTS} from "./data"
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {

  function handleSelect(selectedButton){
    console.log(selectedButton)
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>CORE Concepts</h2>
          <ul>
            <li><CoreConcept {...CORE_CONCEPTS[0]}/></li>
            <li><CoreConcept {...CORE_CONCEPTS[1]}/></li>
            <li><CoreConcept {...CORE_CONCEPTS[2]}/></li>
            <li><CoreConcept {...CORE_CONCEPTS[3]}/></li>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect = {() => handleSelect('Components')}>Components</TabButton>
            <TabButton>Components</TabButton>
            <TabButton>Components</TabButton>
            <TabButton>Components</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
