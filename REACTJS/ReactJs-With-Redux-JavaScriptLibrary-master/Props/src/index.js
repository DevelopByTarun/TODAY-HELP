import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import {App} from './App';

ReactDOM.render(<App 
    col1 = "Id" col2 = "Name"
    id1 = "1" name1 = "Tarun"
    id2 = "2" name2 = "Varun"
    id3 = "3" name3 = "Amit"
    id4 = "4" name4 = "Sonia"
    id5 = "5" name5 = "Ramneek" 
    scope="#" scope1="1" scope2="2" scope3="3" scope4="4" scope5="5"
    name="Tarun"
    />, document.querySelector('#root'));
