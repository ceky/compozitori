import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import classNames from 'classnames';

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
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  const [selectedLanguage] = useState('ro');
  const [selectedPage, setSelectedPage] = useState('/');

  const bgColorClass = classNames('root-container', {
    'green-background':
      selectedPage === '/compozitori' ||
      selectedPage === '/compozitori-detailed',
    'red-background':
      selectedPage === '/categorii' || selectedPage === '/category-detailed',
    'white-background':
      selectedPage === '/' ||
      selectedPage === '/about-us' ||
      selectedPage === 'contact',
  });

  let location = useLocation();

  useEffect(() => {
    setSelectedPage(location.pathname);
    console.log(selectedPage);
  }, [location]);

  return (
    <div className={bgColorClass}>
      <Header selectedLanguage={selectedLanguage} />

      <div className="page-container">
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
          <Route exact path="/categorii">
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
    </div>
  );
}
