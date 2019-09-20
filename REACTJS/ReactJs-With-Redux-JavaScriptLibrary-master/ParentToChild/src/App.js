import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/reactstrap/dist/reactstrap';
import { Parent } from './component/parent/parent';

export class App extends Component {
  render() {
    return (
      <div>
       <Parent title="Parent To Child Relationship In ReactJs"/>
      </div>
    );
  }
}

