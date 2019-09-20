import React, { Component } from 'react';
import { Todo } from './container/todo';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.css';

export class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Todo head="Todo With Search App In ReactJs"/>
          </div>
        </div>
      </div>
    );
  }
}

