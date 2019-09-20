import React, { Component } from 'react';
import { Spa } from './components/spa';

export class App extends Component {
  render() {

    var list = {
      head: "ReactJs Routing",
      home: "Home",
      about: "About Us",
      final: "Final Report",
      user: "Nested User",
      butt: "Search",
      contact: "Contact Us",
      hContact: "Home Contact",
      oContact: "Office Contact"
    }

    return (
      <div>
       <Spa list={list}/>
      </div>
    );
  }
}

