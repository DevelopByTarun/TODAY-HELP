import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { Button } from 'reactstrap';

export class Child extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var myStyle = {
            textAlign: "center",
            fontFamily: "cursive"
        }

        return(
            <div>
                <h1 style={myStyle}>{this.props.title}</h1>
                <Button color="primary" onClick={this.props.updateDataProp}>
                Click For Update State Through Child Component
                </Button>
                <br/><br/>
                <Alert color="dark">
                <h3>{this.props.dataProp}</h3>
                </Alert>
            </div>
        );
    }
}
