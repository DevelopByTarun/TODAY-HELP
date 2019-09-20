import React, { Component } from "react";
import { Alert, Label, Input, Col, FormGroup } from 'reactstrap';

export class FirstWayBinding extends Component {

    constructor(props) {
        super(props);
        this.state = {
            getValue: ''
        }
    }

    takeInput(event) {
        this.setState({
            getValue: event.target.value
        });
    }

    render() {

        var myStyle = {
            fontFamily: "gothic"
          }

        return(
            <div>
                <h2 style={myStyle}>{this.props.head1}</h2>
                <br/>
                <FormGroup row>
          <Label for="exampleEmail" sm={2}>Enter Text ::</Label>
          <Col sm={10}>
            <Input type="text" onChange={this.takeInput.bind(this)} id="exampleEmail" placeholder="Type Here"/>
          </Col>
        </FormGroup>
        <br/>
        <Alert color="dark">
            <h3>Welcome {this.state.getValue}</h3>
        </Alert>
            </div>
        );
    }
}