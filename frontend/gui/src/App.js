import React from 'react';
import './scrollDownButton.css';
import './components/grid.css';

import BrowserRouter from './components/browserRouter';
import NavbarPage from './components/navbar';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      index: 0,
    }
}

  componentDidMount() {
    fetch('http://192.168.1.7:8000/api/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
          index: 0,
        })
      });
  }
  
  render() {

    var { isLoaded } = this.state;

      if (!isLoaded) {
        return(
          <div className="d-flex justify-content-center" >
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )
      }
      else {
        return (
          <BrowserRouter iteme = {this.state.items}> 
            <NavbarPage />
          </BrowserRouter>
        );
      }
  }
}

export default App;
