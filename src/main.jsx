import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'antd/dist/antd.css';

import './main.css';
import Home from './pages/Home/Home';
import MusicStyle from './pages/MusicStyle/MusicStyle';
import PerformanceDetails from './pages/PerformanceDetails/PerformanceDetails';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

function App() {
  const [selectedCategory, setSelectedCategory] = useState({});
  const [selectedPerformance, setSelectedPerformance] = useState({});

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }

  function handlePerformanceTableClick(selectedPerformance) {
    setSelectedPerformance(selectedPerformance);
  }

  return (
    <React.Fragment>
      <Router>
        <Header />

        <div className="main-container">
          <Switch>
            <Route exact path="/">
              <Home
                onOpenCategory={(category) => handleCategoryClick(category)}
              />
            </Route>
            <Route path="/music-style">
              <MusicStyle
                selectedCategory={selectedCategory}
                onTableRowClick={(performance) =>
                  handlePerformanceTableClick(performance)
                }
              />
            </Route>
            <Route path="/performance-details">
              <PerformanceDetails selectedPerformance={selectedPerformance} />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </React.Fragment>
  );
}
