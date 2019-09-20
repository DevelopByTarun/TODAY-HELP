import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import { Form, FormControl, FormGroup, ControlLabel, Button, Alert, Grid, Row, Col } from 'react-bootstrap';

export class App extends Component {

  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      counter: null,
      name: '',
      message: '###########'
    }
  }

  increment() {
    this.count++;
    this.setState({
      counter: this.count,
      name: '',
      message: '###########'
    });
  }

  sayHello() {
    this.setState({
      message: this.props.text,
      counter: this.count,
      name: ''
    });
  }

  takeName(event) {
    this.setState({
      message: this.props.text,
      counter: this.count,
      name: event.target.value
    });
  }

  render() {

    var myStyle = {
      textAlign: "center",
      fontFamily: "gothic"
    }

    return (

     <div>
     <h1 style={myStyle}>{this.props.title}</h1>
     <br/><br/>
     <Grid>
      <Row>
        <Col>
          <Button bsStyle="primary" bsSize="medium" onClick={()=> this.increment()}>
            Get Counter
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button bsStyle="warning" bsSize="medium" onClick={this.sayHello.bind(this)}>
            Get Message
          </Button>
          <br/><br/>
          <Alert bsStyle="dark" bsSize="medium">
          <h4>{this.state.message} And Counter Is {this.state.counter}</h4>
          </Alert>
          <br/>
          <Form inline>
          <FormGroup controlId="formInlineName">
          <ControlLabel>Name :: &nbsp;</ControlLabel>
          <FormControl type="text" onKeyUp={this.takeName.bind(this)} placeholder="Type Here"/>
          </FormGroup>
          </Form>
          <br/>
          <Alert bsStyle="info" bsSize="medium">
          <h4>{this.state.name}</h4>
          </Alert>
        </Col>
      </Row>
     </Grid>
     </div>
    );
  }
}

