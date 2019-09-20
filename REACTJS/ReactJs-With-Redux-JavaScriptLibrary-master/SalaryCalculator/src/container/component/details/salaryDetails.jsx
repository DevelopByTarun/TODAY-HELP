import React from "react";
import { Table } from 'react-bootstrap';

export const SalaryDetails = (props)=> {

    var myStyle = {
        fontFamily: "cursive",
        color: 'red',
        textAlign: "center"
      }

    return(
        <div>
<Table striped bordered responsive>
    <legend><h3 style={myStyle}>{props.title}</h3></legend>
  <tbody>
    <tr>
      <td><h4>{props.heads.sal}</h4></td>
      <td><h5>{props.details.salary}</h5></td>
    </tr>
    <tr>
      <td><h4>{props.heads.hra}</h4></td>
      <td><h5>{props.details.hra}</h5></td>
    </tr>
    <tr>
      <td><h4>{props.heads.da}</h4></td>
      <td><h5>{props.details.da}</h5></td>
    </tr>
    <tr>
      <td><h4>{props.heads.ta}</h4></td>
      <td><h5>{props.details.ta}</h5></td>
    </tr>
    <tr>
      <td><h4>{props.heads.pf}</h4></td>
      <td><h5>{props.details.pf}</h5></td>
    </tr>
    <tr>
      <td><h4>{props.heads.gs}</h4></td>
      <td><h5>{props.details.gs}</h5></td>
    </tr>
    <tr>
      <td><h4>{props.heads.ns}</h4></td>
      <td><h5>{props.details.ns}</h5></td>
    </tr>
  </tbody>
</Table>
        </div>
    );
}