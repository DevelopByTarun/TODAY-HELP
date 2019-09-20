import React from "react";
import { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/reactstrap/dist/reactstrap';
import { Button, Alert, Container, Row, Col } from 'reactstrap';

export class App extends Component {

  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      counter: this.count
    }
  }

  increment() {
    this.count++;
    this.setState({
      counter: this.count
    });
  }

  decrement() {
    this.count--;
    this.setState({
      counter: this.count
    });
  }

  render() {

    var myStyle = {
      textAlign: "center"
    }

    return(
      <div>
        <h1 style={myStyle}>{this.props.title}</h1>
        <Container>
          <Row>
            <Col md="12">
            <Button color="primary" onClick={this.increment.bind(this)}>
              Click For Increment
            </Button>
            <br/><br/>
            <Alert color="dark"><h2>{this.state.counter}</h2></Alert>
            <Button color="danger" onClick={()=> this.decrement()}>
            Click For Decrement
            </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}