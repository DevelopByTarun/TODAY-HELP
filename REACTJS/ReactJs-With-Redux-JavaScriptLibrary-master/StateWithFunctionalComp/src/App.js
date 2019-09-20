import React, { Component } from 'react';
import './App.css';
import { Table } from 'reactstrap';

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      a: 456,
      b: 233,
      dt: new Date()
    }
  }

  render() {

    return(
      <div>
      <h1 className="head">{this.props.propsy.title}</h1>
      <br/>
      <Table dark bordered>
        <thead>
          <tr>
          <th>#</th>
          <th><h3>{this.props.propsy.col1}</h3></th>
          <th><h3>{this.props.propsy.col2}</h3></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>
            <h4>{this.props.propsy.row1}</h4>
            </td>
            <td>
            <h4>{this.state.a}</h4>
            </td>
          </tr>
          <tr>
          <th scope="row">2</th>
          <td>
          <h4>{this.props.propsy.row2}</h4>
          </td>
          <td>
          <h4>{this.state.b}</h4>
          </td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>
        <h4>{this.props.propsy.sum}</h4>
        </td>
        <td>
        <h4>{this.state.a + this.state.b}</h4>
        </td>
      </tr>
      <tr>
      <th scope="row">4</th>
      <td>
      <h4>{this.props.propsy.sub}</h4>
      </td>
      <td>
      <h4>{this.state.a - this.state.b}</h4>
      </td>
    </tr>
    <tr>
    <th scope="row">5</th>
    <td>
    <h4>{this.props.propsy.mul}</h4>
    </td>
    <td>
    <h4>{this.state.a * this.state.b}</h4>
    </td>
  </tr>
  <tr>
  <th scope="row">6</th>
  <td>
  <h4>{this.props.propsy.div}</h4>
  </td>
  <td>
  <h4>{this.state.a / this.state.b}</h4>
  </td>
</tr>
<tr>
<th scope="row">7</th>
<td>
<h4>{this.props.propsy.doo}</h4>
</td>
<td>
<h4>{this.state.dt.toLocaleTimeString()}</h4>
</td>
</tr>
        </tbody>
      </Table>
      </div>
    );
  }
}