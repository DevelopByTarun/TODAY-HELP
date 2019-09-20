import React from 'react';
import {Table} from 'react-bootstrap';
import './App.css';
import {Child} from './child';

export const App = (props)=> {
  
  let myStyle = {
    textAlign: "center",
    fontStyle: "italic"
  };

  const styling = {
    txtColor: {color:"aquamarine"},
    bgColor: {backgroundColor:"red"}
  }

  const eitherHtml = <h2>{props.name5}, You Have Successfully Learned This Concept</h2>;
  const neitherHtml = <h2>{props.name2}, Unable To Learn This Concept</h2>;

  var data = "This data is send from parent comp and receive in child comp and done by "+props.name;

  return(
    <div>
    <h1 style={myStyle}>Welcome {props.name}, Props With React Bootstrap</h1>
    <Table striped bordered responsive>
      <thead>
        <tr>
          <th>{props.scope}</th>
          <th>{props.col1}</th>
          <th>{props.col2}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.scope1}</td>
          <td>{props.id1}</td>
          <td>{props.name1}</td>
        </tr>
        <tr>
        <td>{props.scope2}</td>
        <td>{props.id2}</td>
        <td>{props.name2}</td>
      </tr>
      <tr>
      <td>{props.scope3}</td>
      <td>{props.id3}</td>
      <td>{props.name3}</td>
    </tr>
    <tr>
    <td>{props.scope4}</td>
    <td>{props.id4}</td>
    <td>{props.name4}</td>
  </tr>
  <tr>
  <td>{props.scope5}</td>
  <td>{props.id5}</td>
  <td>{props.name5}</td>
</tr>  
      </tbody>
    </Table>

    <br/>
    {props.name.length>=4?eitherHtml:neitherHtml}

    <br/>

  <h2 className={props.name.length>=5?"trueStyle":"falseStyle"}>Style Applied On Condition basis</h2>

  <br/>

  <h2 style={styling.txtColor}>Hello {props.name}, This IsReactJs Props App</h2>
  <h2 style={styling.bgColor}>Welcome {props.name2}</h2>

  <br/>

    <Child parentdata={data}/>
    </div>
  );
}
