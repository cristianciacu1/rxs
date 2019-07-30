import React from 'react';
import TestimonialsPage from './card1';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import TitleSection from './lilComponents/titleCenterOfSection';

export default class ServciiPage extends React.Component {
    render() {
        return(
            <div className="root aBlack font2">
                <MDBContainer>
                <TitleSection title="Servicii" />
                    <div className="special">
                        <MDBRow className="paddingBottom">
                            <TestimonialsPage color = "blue" logo="camera.png" title = "Foto" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                            <TestimonialsPage color = "peach" logo="film.png" title = "Film" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                            <TestimonialsPage color = "aqua" logo="marketing.png" title = "Digital Marketing" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." />
                        </MDBRow>
                    </div>
                </MDBContainer>
            </div>
        );
    }
}