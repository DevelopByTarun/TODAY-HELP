import React, { Component } from "react";
import { Alert, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

export class Child extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fillText: ''
        }
    }

    takeLastName(event) {
        this.setState({
            fillText: event.target.value
        });
    }

    sendDataThruChild() {
        var childStr = this.state.fillText;
        this.props.ptocFn(childStr);
    }

    render() {

        var myStyle = {
            fontFamily: "'Lobster', cursive"
        }

        return(
            <div>
<h4 style={myStyle}>
    <strong>{this.props.head}</strong>
    <Alert color="primary">{this.props.ptocText}</Alert>
</h4>
<Form>
    <FormGroup row>
        <Label for="exampleEmail" sm={2}>
            <strong>
                <h4 style={myStyle}>LastName&nbsp;::</h4>
            </strong>
        </Label>
        <Col sm={10}>
        <Input type="text" onKeyUp={this.takeLastName.bind(this)} id="exampleEmail" placeholder="Enter LastName Here" />
        </Col>
    </FormGroup>
    <br/>
    <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
        <Button onClick={this.sendDataThruChild.bind(this)} color="success">
            Send LastName To Parent Thru Child
        </Button>
        </Col>
    </FormGroup>
</Form>
            </div>
        );
    }
}