import React, { Component } from 'react';
import { Geolocation } from './component/geolocation';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';

export class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            longi: null,
            lati: null
        }
    }

    doGeolocation(position) {
        this.setState({
            longi: position.coords.longitude,
            lati: position.coords.latitude
        });
    }

    getGeolocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.doGeolocation.bind(this));
        }
    }

    render() {

        var myStyle = {
            textAlign: "center",
            fontFamily: "gothic"
        }

        return(
            <div>
            <h1 style={myStyle}>{this.props.title}</h1>
            <br/>
                <Grid className="container-fluid">
                    <Row>
                        <Col md={12}>
                            <Geolocation getLocation={this.getGeolocation.bind(this)} 
                            getLongi={this.state.longi} getLati={this.state.lati}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}