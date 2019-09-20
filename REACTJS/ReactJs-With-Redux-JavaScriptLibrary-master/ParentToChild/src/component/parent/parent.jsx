import React, { Component } from "react";
import { Child } from '../child/child';
import { Container, Row, Col, Alert } from 'reactstrap';

export class Parent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Tarun',
            lastName: ''
        }
    }

    getDataFromChild(childStr) {
        this.setState({
            lastName: childStr
        });
    }

    render() {

        var myStyle = {
            fontFamily: "'Lobster', cursive",
            textAlign: "center"
        }

        var myStyling = {
            fontFamily: "'Pacifico', cursive"
        }

        return(
            <div>
                <h1 style={myStyle}>
                    {this.props.title}
                </h1>
                <br/><br/>
                <Container>
                    <Row>
                        <Col>
                            <h4 style={myStyling}>
                                <strong>First Name</strong> <Alert color="warning">{this.state.firstName}</Alert> <strong>And Last Name</strong> <Alert color="dark">{this.state.lastName}</Alert>
                            </h4>
                            <br/><br/>
                            <Child head="Child Prop Send Thru Parent :-" ptocText={this.state.firstName} ptocFn={this.getDataFromChild.bind(this)}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}