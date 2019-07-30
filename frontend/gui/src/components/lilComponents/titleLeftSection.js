import React from 'react';
import {MDBContainer, MDBRow, MDBCol} from 'mdbreact';

/// Title Center

export default class TitleLeftSection extends React.Component {
    render() {
        return(
            <MDBContainer>
                <MDBRow>
                    <MDBCol xs={12} sm={12} md={10} lg={10} xl={10} className="md-offset-2">
                        <div className="font3 padding">
                            <h1 className="font3 text-left" style={{fontSize: 48, fontWeight: 500}}>{this.props.title}</h1>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}