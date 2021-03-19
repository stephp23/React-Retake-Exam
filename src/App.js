import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RandomCharacters from "./components/RandomCharacters";
import DeathCount from "./components/DeathCount";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/randomcharacters" exact component={RandomCharacters} />
        <Route path="/deathcount" exact component={DeathCount} />
      </Switch>
    </div>
  );
}

export default App;
