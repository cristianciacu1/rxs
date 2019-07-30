import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScrollToTop from './scroll';

import MyComponent from './parallax';
import NavbarPage from './navbar';
import My404Component from './myError';
import Portfolio from './portfolio';
import Footer from './footer';
import Cars from './categories/cars';
import ServiciiPage from './serviciesPage';
import Contact from './contact';
import RedirectToNotFound from './notFound';
import Success from './success';

import Infos from './json/info.json';

export default class BrowserRouter extends React.Component {
    render() {
        const DefaultRoutes = () => {
          return(
              <div>
                <NavbarPage />
                <Switch>
                    <Route exact path="/" component={MyComponent} />
                    <Route path="/services/" component={ServiciiPage} />
                    <Route path="/contact/" component={Contact} />
                    <Route exact path="/portfolio/cars/" component={() => <Cars infos={Infos[0]}/>} />
                    <Route path="/portfolio/fashion/" component={() => <Cars infos={Infos[1]}/>} />
                    <Route path="/portfolio/food/" component={() => <Cars infos={Infos[2]}/>} />
                    <Route path="/portfolio" component={() => <Portfolio infos={Infos}/>} />
                    <Route component={RedirectToNotFound}/>
                </Switch>
                <Footer />
              </div>
          )
        }

        return(
          <Router>
            <ScrollToTop>
              <Switch>
                <Route component={My404Component} path="/notfound"/>
                <Route path="/success/" component={Success} />
                <Route component={DefaultRoutes} />
              </Switch>
            </ScrollToTop>
          </Router>
        )
    }
}