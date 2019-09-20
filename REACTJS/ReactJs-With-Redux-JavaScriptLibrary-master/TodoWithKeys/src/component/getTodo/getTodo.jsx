import React, { Component } from "react";

export class GetTodo extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        var myStyle = {
            color: "white",
            textAlign: "center"
        }

        return (
            <div className="table-responsive">
                <table className="table table-bordered">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Items</th>
    </tr>
  </thead>
  <tbody>
      {this.props.list.map((item, index)=> {
          return(
            <tr key={index}>
            <th scope="row">$</th>
            <td style={myStyle} className="bg-danger">{item}</td>
          </tr>
          );
      })}
  </tbody>
</table>
            </div>
        );
    }
}