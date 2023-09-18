import logo from "./logo.svg";
import Input from "./components/input";
import Placar from "./components/Placar";
import Pokemon from "./components/pokemon";
import "./App.css";
import Tipo from "./components/tipo";

function App() {
  return (
    <div className="App">
      <Placar />
      <Pokemon />
      <Input />
      <Tipo />
    </div>
  );
}

export default App;
