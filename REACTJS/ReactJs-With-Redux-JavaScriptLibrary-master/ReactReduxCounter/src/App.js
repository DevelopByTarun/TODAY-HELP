import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Counter } from './container/counter';

export class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Counter head="Counter App In ReactJs With Redux"/>
          </div>
        </div>
      </div>
    );
  }
}

