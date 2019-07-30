import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = (props) => {

    return (
            <MDBCol md={6} lg={6} xl={6}>
            <MDBCard>
                <div className={`imageHero ${props.color}-gradient`}>

                </div>
                <div className="testimonial">
                    <div className="circle">
                        <img src={`http://192.168.1.7:8000/media/post_images/${props.logo}`}alt="" style={{width:55, height: 55}} />
                    </div>
                </div>
                <MDBCardBody>
                    <MDBCardTitle className="text-center text-uppercase" style={{fontSize: 24}}>{props.title}</MDBCardTitle>
                    <MDBCardText className="text-center" style={{fontSize: 16}}>
                        {props.text}
                    </MDBCardText>
                    <div className="text-center">
                        <MDBBtn outline color="deep-orange" size="md">Show More!</MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
    )
}

export default CardExample;