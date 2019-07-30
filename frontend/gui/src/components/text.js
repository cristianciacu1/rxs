import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { Element } from 'react-scroll';
import './grid.css';

import TitleLeftSection from './lilComponents/titleLeftSection';


export default class Text extends React.Component {
    render() {
        return(
            <Element name="text" className="element">
                <TitleLeftSection title='Despre' />
                <MDBContainer>
                    <MDBRow className="testimonial paddingText31">
                        <MDBCol xs={12} sm={12} md={6} lg={6} xl={6}>
                            <img src="https://dummyimage.com/500x500/000/fff" className = "aboutMe img-fluid" alt=""></img>
                        </MDBCol>
                        <MDBCol xs={12} sm={12} md={6} lg={6} xl={6} className="paddingText21">
                            <p className="customFont" style={{fontSize: 26}}>
                            O abordare diferită a fotografiei.<br/><br/>
                            Cu toții știm cât de dificil este să găsești un fotograf pe placul tău, în care să ai încredere că va bifa toate cerințele tale. 
                            <br/><br/>
                            Dacă alegi să lucrăm împreună pentru proiectul tău, fie el un eveniment sau o ședință foto individuala , te pot asigura că vei avea parte de rezultatul dorit.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </Element>
        );
    }
} 