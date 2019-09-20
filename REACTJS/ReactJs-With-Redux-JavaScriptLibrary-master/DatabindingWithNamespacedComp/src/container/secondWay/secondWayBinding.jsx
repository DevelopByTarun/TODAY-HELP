import React, { Component } from "react";
import { Alert, Label, Input, Col, FormGroup } from 'reactstrap';

export class SecondWayBinding extends Component {

    constructor(props) {
        super(props);
        this.state = {
            val: ''
        }
    }

    doInput() {
        this.setState({
            val: this.refs.mytxt.value
        });
    }

    render() {

        var myStyle = {
            fontFamily: "gothic"
          }

        return(
            <div>
                 <h2 style={myStyle}>{this.props.head2}</h2>
                 <br/>
                 <FormGroup row>
          <Label for="exampleEmail" sm={2}>Enter Text ::</Label>
          <Col sm={10}>
            <Input type="text" ref="mytxt" onChange={this.doInput.bind(this)} id="exampleEmail" placeholder="Type Here"/>
          </Col>
        </FormGroup>
        <br/>
        <Alert color="success">
            <h3>Welcome {this.state.val}</h3>
        </Alert>
            </div>
        );
    }
}