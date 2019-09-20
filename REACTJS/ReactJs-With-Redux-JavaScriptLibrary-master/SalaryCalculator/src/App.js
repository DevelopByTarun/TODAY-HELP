import React, { Component } from 'react';
import { SalaryModel } from './container/model/salaryModel';
import { SalaryInput } from './container/component/input/salaryInput';
import { SalaryDetails } from './container/component/details/salaryDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import { Grid, Row, Col, Alert } from 'react-bootstrap';

export class App extends Component {

  constructor(props) {
    super(props);
    this.salary = 0;
    this.state = {
      salary: this.salary,
      object: {}
    }
  }

  salaryCompute() {
    SalaryModel.takeSalary(this.salary);
    var obj = {
      salary: this.salary,
      hra: SalaryModel.hra(),
      da: SalaryModel.da(),
      ta: SalaryModel.ta(),
      pf: SalaryModel.pf(),
      gs: SalaryModel.gs(),
      ns: SalaryModel.ns()
    }
    this.setState({
      salary: this.salary,
      object: obj
    });
  }

  takeInput(event) {
    this.salary = parseFloat(event.target.value);
    console.log("Salary Is :: "+this.salary);
  }

  render() {

    var myStyle = {
      textAlign: 'center',
      fontFamily: "gothic",
      color: 'blue'
    }

    var heads = {
      sal: "Current Salary",
      hra: "House Rent Allowance",
      da: "Deputation Allowance",
      ta: "Travel Allowance",
      pf: "Provident Fund",
      gs: "Gross Salary",
      ns: "Net Salary"
    }

    return (

      <div>
        <h1 style={myStyle}>{this.props.title}</h1>
        <br/>
        <Grid>
        <Row className="show-grid">
        <Col md={12}>
          <SalaryInput takeIt={this.takeInput.bind(this)} computeIt={this.salaryCompute.bind(this)}/>
          <br/>
          <Alert bsStyle="dark">
            <h4>{this.state.salary}</h4>
          </Alert>
          <br/>
          <SalaryDetails details={this.state.object} title="Salary Details" heads={heads}/>
        </Col>
      </Row>
        </Grid>
      </div>

    );
  }
}

