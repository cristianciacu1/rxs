import React from 'react';
import './grid.css';
import 'antd/dist/antd.css';
import { Button, Icon } from 'semantic-ui-react';
import { MDBContainer } from 'mdbreact';
import {Link} from 'react-router-dom';
import Footer2 from './footer2';

export default class Success extends React.Component {

    render() {
        return(
            <div>
                <div className="wrapper">
                    <MDBContainer>
                        <h1 className=" text-center font2 titleSuccess" style={{color: 'white', fontSize: 60, fontWeight: 100}}>
                            <b className="text-uppercase">{`Thank you ${this.props.location.state.name1}!`}</b>
                            <br/>
                            <p className="text-center text-" style={{fontSize: 26, color: '#ECF0F1'}}>Vei fi contactat de catre mine cat mai curand posibil.</p>
                        </h1>
                        <div className="empty"/>
                        <div className="stickBottom text-center aWhite">
                            <Button animated circular basic color='orange' size="large">
                                <Link to="/">
                                    <Button.Content visible className="text-uppercase">homepage</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name='arrow right' />
                                    </Button.Content>
                                </Link>
                            </Button>
                        </div>
                    </MDBContainer>
                </div>
                <div className="smallPart">
                    <MDBContainer>
                        <Footer2 />
                    </MDBContainer>
                </div>
            </div>
        )
    }
}