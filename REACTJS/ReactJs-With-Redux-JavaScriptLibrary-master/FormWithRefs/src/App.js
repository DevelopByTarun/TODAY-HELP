import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import { Grid, Row, Col, Alert } from 'react-bootstrap';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userid: '',
      password: ''
    }
  }

  getFormValue() {
    var utext = this.refs.uid.value;
    var ptext = this.refs.pwd.value;
    this.setState({
      userid: utext,
      password: ptext
    });
  }

  // clearAll() {
  //   var texts = document.querySelectorAll("input[type='text']");
  //   for(let i = 0; i < texts.length; i++) {
  //     texts[i].value = '';
  //   }
  //   texts[0].focus();
  // }

  render() {

    var myStyle = {
      textAlign: "center",
      fontFamily: "cursive",
      color: "blue"
    }

    return (
      <div>
       <h1 style={myStyle}>{this.props.title}</h1>
       <br/><br/>
       <Grid>
        <Row>
          <Col md={12}>
          <form class="form-horizontal">
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-2 control-label">Userid&nbsp;::</label>
            <div class="col-sm-10">
              <input type="text" ref="uid" class="form-control" id="inputEmail3" placeholder="Type Here"/>
            </div>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-2 control-label">Password&nbsp;::</label>
            <div class="col-sm-10">
              <input type="text" ref="pwd" class="form-control" id="inputPassword3" placeholder="Type Here"/>
            </div>
          </div>
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button onClick={this.getFormValue.bind(this)} class="btn btn-primary btn-lg">Get Value</button>&nbsp;&nbsp;
              <button type="reset" class="btn btn-danger btn-lg">Clear All</button>
            </div>
          </div>
        </form>
        <br/>
        <Alert bsStyle="dark" bsSize="small">
        <h4>{this.state.userid}</h4>
        </Alert>&nbsp;
        <Alert bsStyle="dark" bsSize="small">
        <h4>{this.state.password}</h4>
        </Alert>       
          </Col>
        </Row>
       </Grid>
      </div>
    );
  }
}

