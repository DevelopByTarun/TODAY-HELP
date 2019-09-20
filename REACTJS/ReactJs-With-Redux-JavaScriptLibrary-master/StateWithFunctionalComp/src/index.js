import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/reactstrap/dist/reactstrap';
import { App } from './App';

var propsy = {
    title: "Basic Calculator Through State In React",
    col1: "Initialise State",
    col2: "Get State",
    row1: "Value Of A",
    row2: "Value Of B",
    sum: "Addition Of A And B",
    sub: "Subtration Of A And B",
    mul: "Multiplication Of A And B",
    div: "Division Of A And B",
    doo: "Time Of Operations"
}

ReactDOM.render(<App propsy={propsy}/>, document.querySelector("#root"));
