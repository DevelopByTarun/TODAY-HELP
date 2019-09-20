import React, { Component } from 'react';
import { Child } from './child';

export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: "This Data Belongs From The Parent Component"
    }
  }

  updateState() {
    this.setState({data: "This Data Updated Through The Child Component"});
  }

  render() {

    return(
      <div>
        <Child dataProp={this.state.data} updateDataProp={this.updateState.bind(this)} title="Event Handling In ReactJs"/>
      </div>
    );
  }
}
