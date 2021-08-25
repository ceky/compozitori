import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './main.css';
import Home from './pages/Home/Home';
import Compozitori from './pages/Compozitori/Compozitori';
import CompozitoriDetailed from './pages/CompozitoriDetailed/CompozitoriDetailed';
import Categories from './pages/Categories/Categories';
import CategoryDetailed from './pages/CategoryDetailed/CategoryDetailed';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />

        <div className="main-container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/compozitori">
              <Compozitori />
            </Route>
            <Route exact path="/compozitori-detailed">
              <CompozitoriDetailed />
            </Route>
            <Route exact path="/categories">
              <Categories />
            </Route>
            <Route exact path="/category-detailed">
              <CategoryDetailed />
            </Route>
            <Route exact path="/about-us">
              <AboutUs />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </React.Fragment>
  );
}
