import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from "./componentsViews/Navbar";
import Home from "./componentsViews/Home";
import RandomCharacters from "./componentsViews/RandomCharacters";
import DeathCount from "./componentsViews/DeathCount";
import Footer from "./componentsViews/Footer";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/randomcharacters" exact component={RandomCharacters} />
        <Route path="/deathcount" exact component={DeathCount} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
