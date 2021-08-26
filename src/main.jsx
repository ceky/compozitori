import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
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
  const [selectedOpereCompozitor, setSelectedOpereCompozitor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const history = useHistory();

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
  }, [location]);

  useEffect(() => {
    if (selectedOpereCompozitor) {
      history.push('/compozitori-detailed');
    }
  }, [selectedOpereCompozitor]);

  useEffect(() => {
    if (selectedCategory) {
      history.push('/category-detailed');
    }
  }, [selectedCategory]);

  const handleCompozitorSelect = (opereCompozitor) => {
    setSelectedOpereCompozitor(opereCompozitor);
  };

  const handleInstrumentSelect = (instrument) => {
    setSelectedCategory({
      fileredBy: 'instrument',
      name: instrument,
    });
  };

  const handleCategorieMuzicalaSelect = (categorieMuzicala) => {
    setSelectedCategory({
      fileredBy: 'categorieMuzicala',
      name: categorieMuzicala.name,
    });
  };

  return (
    <div className={bgColorClass}>
      <Header selectedLanguage={selectedLanguage} />

      <div className="page-container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/compozitori">
            <Compozitori
              handleCompozitorSelect={(opereCompozitor) =>
                handleCompozitorSelect(opereCompozitor)
              }
            />
          </Route>
          <Route exact path="/compozitori-detailed">
            <CompozitoriDetailed opereCompozitor={selectedOpereCompozitor} />
          </Route>
          <Route exact path="/categorii">
            <Categories
              handleInstrumentSelect={(instrument) =>
                handleInstrumentSelect(instrument)
              }
              handleCategorieMuzicalaSelect={(categorieMuzicala) =>
                handleCategorieMuzicalaSelect(categorieMuzicala)
              }
            />
          </Route>
          <Route exact path="/category-detailed">
            <CategoryDetailed category={selectedCategory} />
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
