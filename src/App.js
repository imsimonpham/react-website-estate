import "./App.css";
import React, { useState, useEffect, useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Rentals from "./pages/Rentals";
import Homes from "./pages/Homes";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/About" exact>
          <About />
        </Route>
        <Route path="/Contact" exact>
          <Contact />
        </Route>
        <Route path="/Rentals" exact>
          <Rentals />
        </Route>
        <Route path="/Homes" exact>
          <Homes />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
