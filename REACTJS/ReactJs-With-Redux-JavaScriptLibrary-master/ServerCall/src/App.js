import React, { Component } from 'react';
import { GetData } from './component/getData';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <GetData head="Ajax Call In ReactJs"/>
          </div>
        </div>
      </div>
    );
  }
}

