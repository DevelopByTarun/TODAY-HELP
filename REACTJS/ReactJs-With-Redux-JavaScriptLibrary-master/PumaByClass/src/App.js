import React, { Component } from 'react';
import { Puma } from './container/puma';

export class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div>
        <Puma/>
      </div>
    );
  }
}