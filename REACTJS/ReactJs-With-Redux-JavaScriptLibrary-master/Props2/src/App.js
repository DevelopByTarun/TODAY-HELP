import React from 'react';
import { List } from './list';
import './App.css';

export const App = ()=> {

  return(
    <div>
    <br/>
    <h1 className="head">This Is Props Demo 2</h1>
    <br/>
    <ul className="list-group">
      <li className="list-group-item list-group-item-success">
      <span className="badge">1</span>
      <List product="Alprex" dosage="5mg"/>
      </li>
      <li className="list-group-item list-group-item-info">
      <span className="badge">2</span>
      <List product="Diazapam" dosage="50mg"/>
      </li>
      <li className="list-group-item list-group-item-warning">
      <span className="badge">3</span>
      <List product="Morphine" dosage="300mcg"/>
      </li>
      <li className="list-group-item list-group-item-danger">
      <span className="badge">4</span>
      <List product="Nitrovite" dosage="10mg"/>
      </li>
      <li className="list-group-item list-group-item-primary">
      <span className="badge">5</span>
      <List product="SpasmoProxyvon" dosage="325mg"/>
      </li>
    </ul>
    </div>
  );
}
