import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/reactstrap/dist/reactstrap';
import { Col, Button, Form, FormGroup, Label, Input, Alert, Container, Row } from 'reactstrap';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      fullName: '',
    }
  }

  takeInputFN(event) {
    this.setState({
      firstName: event.target.value
    });
  }

  takeInputLN(event) {
    this.setState({
      lastName: event.target.value
    });
  }

  greet() {
    this.setState({
      fullName: this.state.firstName + this.state.lastName
    });
  }

  initUpperCase() {
    var capName = '';
    let name = this.state.fullName;
    capName = name.toUpperCase();
    this.setState({
      fullName: this.state.firstName + this.state.lastName,
      fullName: capName
    });
  }

  initCapitalize() {
    var copName = '';
    let name = this.state.fullName;
    let names = name.split(" ");
    for(let n of names) {
      copName += n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()+" "; 
    }
    this.setState({
      fullName: this.state.firstName + this.state.lastName,
      fullName: copName
    });
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
      <Container>
        <Row>
          <Col md="12">
          <Form>
          <FormGroup row>
            <Label for="exampleText" sm={2}>FirstName ::</Label>
            <Col sm={10}>
              <Input type="text" onChange={this.takeInputFN.bind(this)} id="exampleText" placeholder="Enter FirstName"/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleText" sm={2}>LastName ::</Label>
            <Col sm={10}>
              <Input type="text" onChange={this.takeInputLN.bind(this)} id="exampleText" placeholder="Enter LastName"/>
            </Col>
          </FormGroup>
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button color="primary" onClick={this.greet.bind(this)}>Greet</Button>&nbsp;
              <Button color="success" onClick={this.initUpperCase.bind(this)}>Uppercase</Button>&nbsp;
              <Button color="warning" onClick={this.initCapitalize.bind(this)}>Capitalize</Button>&nbsp;
              <Button color="danger">Clear</Button>&nbsp;
            </Col>
          </FormGroup>
        </Form>
        <br/><br/>
        <Alert color="dark">
        <h2>Welcome {this.state.fullName}</h2>
        </Alert>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}
