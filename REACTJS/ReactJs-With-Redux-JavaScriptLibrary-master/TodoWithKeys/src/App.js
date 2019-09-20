import React, { Component } from 'react';
import { Todo } from './component/todo';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Todo head="Todo App With Keys In ReactJs"/>
            </div>
          </div>
      </div>
    );
  }
}

