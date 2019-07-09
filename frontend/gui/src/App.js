import React from 'react';
import './scrollDownButton.css';
import MyComponent from './components/parallax';
import Text from './components/text';
import MediaQuery from './components/imageGrid2';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";

import About from './components/About';
//import Work from './components/Work';
import Main from './components/Main';
import My404Component from './components/myError'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
}

  componentDidMount() {
    fetch('http://localhost:8000/api/posts/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }
  
  render() {

    var { isLoaded } = this.state;

      if (!isLoaded) {
        return <div>Loading...</div>
      }
      else {
        return (
          <Router>
            <div className="App">
            </div>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/home/" component={MyComponent} />
              <Route path="/about/" component={About} />
              <Route component={My404Component} />
            </Switch>
          </Router>
        );
      }
  }
}

export default App;
