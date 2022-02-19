import React, { Component } from 'react';
import { Route, Routes, HashRouter } from "react-router-dom";
import Navigation from '../components/navigation';
import About from '../components/about';
import Contact from '../components/contact';
import Portfolio from '../components/portfolio';
import Resume from '../components/resume';
import Redirect from './router-helper/redirect'

class Header extends Component {
  render() {
    return (
      <HashRouter>

        <Navigation />
        <Routes>
          <Route exact path="/" render={() => (<Redirect to="/portfolio" />)} />
          <Route path="/portfolio" >
            <Portfolio/>
            </Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Routes>
      </HashRouter>
    )
  }
}

export default Header;