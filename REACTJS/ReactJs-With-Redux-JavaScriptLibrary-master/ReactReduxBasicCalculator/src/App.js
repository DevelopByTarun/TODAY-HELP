import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Calc } from './container/calc';

export class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Calc head="Basic Calculator In React With Redux"/>
          </div>
        </div>
      </div>
    );
  }
}

