import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Main from "./components/main";
import Navbar from "./components/navbar";
import { Switch, Route } from "react-router-dom";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  Aos.init();
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/" component={Main} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
