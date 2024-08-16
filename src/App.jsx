import {CORE_CONCEPTS, EXAMPLES} from "./data"
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import {useState} from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    console.log(selectedButton)
    setSelectedTopic(selectedButton)
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>CORE Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title}  {...conceptItem}/>
            ))}
            {/*<li><CoreConcept {...CORE_CONCEPTS[0]}/></li>*/}
            {/*<li><CoreConcept {...CORE_CONCEPTS[1]}/></li>*/}
            {/*<li><CoreConcept {...CORE_CONCEPTS[2]}/></li>*/}
            {/*<li><CoreConcept {...CORE_CONCEPTS[3]}/></li>*/}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === 'components'}
              onSelect = {() => handleSelect('components')}>Components</TabButton>
            <TabButton
              isSelected={selectedTopic === 'jsx'}
              onSelect = {() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton
              isSelected={selectedTopic === 'props'}
              onSelect = {() => handleSelect('props')}>Props</TabButton>
            <TabButton
              isSelected={selectedTopic === 'state'}
              onSelect = {() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic && <p>"Please Select"</p>}
          {selectedTopic && (
            <div id = "tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>{EXAMPLES[selectedTopic].code}</pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
