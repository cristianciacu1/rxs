import React from 'react';
import './grid.css';
import { Link } from "react-router-dom";
import { MDBContainer } from 'mdbreact';
import Footer2 from './footer2';
import { Button } from 'semantic-ui-react'

  
export default function Footer() {

    return (
        <div>
          <div className="padding4 contact round ">
                  <MDBContainer className="text-center detailView font3">
                      <h3 className="font3 h3Footer">Do you have any questions or maybe...</h3>
                      <h1 className="font3 h1Footer" style={{fontWeight: 500}}>Want to work together?</h1>
                      <Button basic circular size="large" className="aBlack font3" style={{marginTop: 20}}>
                        <Link to="/contact" className="font3">
                         Contacteaza-ma  <i className="fas fa-long-arrow-alt-right"></i>
                        </Link>
                      </Button>
                  </MDBContainer>
          </div>
          <div className="padding3">
            <MDBContainer>
              <Footer2 />
            </MDBContainer>
          </div>
        </div>
    );
}