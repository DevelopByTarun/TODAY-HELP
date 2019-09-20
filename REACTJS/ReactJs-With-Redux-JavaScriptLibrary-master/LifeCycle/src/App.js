import React, { Component } from 'react';
import { LifeCycle } from './component/lifeCycle';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <LifeCycle head="LifeCycle In ReactJs" bt="Get Increment"/>
          </div>
        </div>
      </div>
    );
  }
}

