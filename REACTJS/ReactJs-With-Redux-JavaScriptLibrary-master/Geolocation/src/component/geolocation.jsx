import React from "react";
import { Component } from 'react';
import { Button, Alert, Form, FormGroup, Col } from 'react-bootstrap';

export class Geolocation extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>  
<Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
        <Col sm={2}>
        <h4>Longitude</h4>
        </Col>
        <Col sm={10}>
        <Alert bsStyle="danger">
            <h4>{this.props.getLongi}</h4>
        </Alert>
        </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
        <Col sm={2}>
        <h4>Latitude</h4>
        </Col>
        <Col sm={10}>
        <Alert bsStyle="warning">
            <h4>{this.props.getLati}</h4>
        </Alert>
        </Col>
    </FormGroup>

    <FormGroup>
        <Col smOffset={2} sm={10}>
        <Button bsStyle="primary" bsSize="medium" onClick={this.props.getLocation}>
            Click the button to get your position
        </Button>
        </Col>
    </FormGroup>
</Form>
            </div>
        );
    }
}