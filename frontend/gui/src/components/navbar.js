import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBContainer,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import './grid.css';
import { Link } from "react-router-dom";


import '../css/body.css';

function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}



constructor(props) {
  super(props);
  if(getWidth() >= 770 ) {
    this.state = {
      'color': null,
      font1: 'black',
      display: 'd-block',
    };
  }
  else {
    this.state = {
      'color': null,
      boxShadow: 'none',
      font1: 'black',
      display: 'd-none',
    };
  }
}

componentDidMount() {

  function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
  }

  let boxShadow = 'none';
  let font1 = 'black';
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      if (getWidth() >= 770) {  //Desktop
        boxShadow = '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)';
        font1 = 'black'
        this.setState({
          'color': 'white',
          boxShadow,
          font1,
          display: 'd-block',
        })
      }
      else {
        font1 = 'black'
        this.setState({ //Mobile
          display: 'd-block',
          'color': 'white',
          font1,
        })
      }     
    }
    else {
      if (getWidth() >= 770) { //Desktop
        font1="black";
        this.setState({
          display: 'd-block',
          'color': '',
          font1,
        })
      }
      else {  //Mobile
        this.setState({
          display: 'd-none',
        })
      }
    }
  });
}

render() {
  return (
    <div>
      <MDBNavbar scrolling fixed="top" dark expand="md" color="rgba(0,0,0,1)" style={{boxShadow: `${this.state.boxShadow}`, background: `${this.state.color}`}} className={`${this.state.display}`} >
        <MDBContainer>
        <MDBNavbarBrand>
          <strong><Link to="/" className="font" style={{color: `${this.state.font1}`}}>RADU STEFAN</Link></strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler image="https://mdbootstrap.com/img/svg/hamburger7.svg?color=000000" onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right >
            <MDBNavItem>
              <MDBNavLink to="/" style={{color: `${this.state.font1}`}}>Despre</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBDropdown>
                <MDBDropdownToggle nav caret style={{color: `${this.state.font1}`}}>
                  <span className="mr-2" href="/portfolio">Portofoliu</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/portfolio/food/">Food</MDBDropdownItem>
                  <MDBDropdownItem href="/portfolio/fashion/">Fashion</MDBDropdownItem>
                  <MDBDropdownItem href="/portfolio/cars/">Cars</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/services" style={{color: `${this.state.font1}`}}>Servicii</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact" style={{color: `${this.state.font1}`}}>Contact</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {this.props.children}
      </div>
    );
  }
}

export default NavbarPage;