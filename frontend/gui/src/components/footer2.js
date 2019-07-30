import React from 'react';
import { MDBRow, MDBCol} from 'mdbreact';

const Footer2 = () => {
    return(
        <MDBRow>
            <MDBCol xs={5} sm={4} md={2} lg={2} xl={2}>
                <h1 className="text-uppercase text-center font2 font-weight-regular" style={{fontSize: 20}}>Radu Stefan</h1>
            </MDBCol>
            <MDBCol xs={7} sm={3} md={2} lg={2} xl={2} className="offset-md-2">
                <p className="text-center font-weight-light font2" style={{fontSize: 20}}><i className="fas fa-phone" style={{paddingRight: 10}}></i>0725563060</p>
            </MDBCol>
            <MDBCol xs={6} sm={6} md={2} lg={2} xl={2} className="aBlack2">
                <p className="text-center font-weight-light font2" style={{fontSize: 20}}><a href="https://instagram.com/the_radustefan/"><i className="fab fa-instagram" style={{paddingRight: 10}} ></i>the_radustefan</a></p>
            </MDBCol>
            <MDBCol xs={6} sm={6} md={3} lg={3} xl={3} className="offset-md-1 aBlack2">
                <h1 className="text-center font2 font-weight-light" style={{fontSize: 20}}>Website by <b><a href="https://instagram.com/cristianciacu1/">Cristian Ciacu</a></b></h1>
            </MDBCol>
        </MDBRow>
    )
  }

  export default Footer2;