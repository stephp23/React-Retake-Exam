import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
