import React from 'react';
import {MDBRow, MDBCol} from 'mdbreact';

/// Title Center

export default class TitleSection extends React.Component {
    render() {
        return(
            <MDBRow>
                <MDBCol xs={12} sm={12} md={12} lg={12} xl={12}>
                    <div className="font3 paddingWNavbar">
                        <h1 className="font3 text-center" style={{fontSize: 48, fontWeight: 500}}>{this.props.title}</h1>
                    </div>
                </MDBCol>
              </MDBRow>
        )
    }
}