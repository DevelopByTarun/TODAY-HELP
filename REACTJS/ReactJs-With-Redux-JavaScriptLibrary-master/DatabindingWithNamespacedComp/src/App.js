import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/reactstrap/dist/reactstrap';
import { Container, Row, Col, Button } from 'reactstrap';
import { FirstWayBinding } from './container/firstWay/firstWayBinding';
import { SecondWayBinding } from './container/secondWay/secondWayBinding';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    }
  }

  handleToggle() {
    var nextState = !this.state.collapse;
    this.setState({
      collapse: nextState
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
            <Button color="danger" onClick={this.handleToggle.bind(this)}>
              Toggle It
            </Button>
            <br/><br/>
            {this.state.collapse?<FirstWayBinding head1="2 Way Databinding In ReactJs Thru event.target.value"/>:<SecondWayBinding head2="2 Way Databinding In ReactJs Thru this.refs.value"/>} 
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}