import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import '../App.css';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};
const insideStyles = {
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: 'white',
    textAlign: 'center',
    width: 350,
    fontSize: 35,
    fontFamily: 'Courgette',
    lineHeight: 1,
};

export default class Main extends React.Component {
    render() {
        return(
            <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
            {this.props.children}
        </div>
        );
    }
}