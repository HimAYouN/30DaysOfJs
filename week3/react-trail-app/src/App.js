import "./App.css";

import Item from "./components/Item";
import ItemDate from "./components/ItemDate";


function App() {
  return (
    <div>
      <Item name="Nirma"></Item>
      <ItemDate day="20" month="June" year="1990"></ItemDate>

      <Item name="SurfExel"></Item>
      <ItemDate day="10" month="August" year="1999"></ItemDate>

      <Item name="555"></Item>
      <ItemDate day="28" month="May" year="2007"></ItemDate>

      <div className="App">Hello World</div>
    </div>
  );
}

export default App;
