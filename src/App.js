import logo from './logo.svg';
import Input from './components/input';
import Placar from './components/Placar';
import Pokemon from './components/pokemon';
import './App.css';


function App() {
  return (
    <div className="App">
      <Placar/>
      <Pokemon/>
      <Input />

    </div>
  );
}

export default App;
