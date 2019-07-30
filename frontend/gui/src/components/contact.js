import React from 'react';
import {MDBRow, MDBCol} from 'mdbreact';
import FormPage from './contact/form';
import Image from './contact/image';

export default class Contact extends React.Component {

    render() {
        function getWidth() {
            return Math.max(
              document.body.scrollWidth,
              document.documentElement.scrollWidth,
              document.body.offsetWidth,
              document.documentElement.offsetWidth,
              document.documentElement.clientWidth
            );
          }
        if(getWidth() > 770) {  ///Desktop
            return(
                <MDBRow style={{paddingBottom: 100}}>
                    <MDBCol xs={12} sm={12} md={6} lg={6} xl={6}>
                        <FormPage />
                    </MDBCol>
                    <MDBCol xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Image />
                    </MDBCol>
                </MDBRow>
            )
        }
        else { //Mobile
            return(
            <MDBRow>
                <MDBCol xs={12} sm={12} md={6} lg={6} xl={6}>
                    <FormPage />
                </MDBCol>
            </MDBRow>
            )
        }
    }
}