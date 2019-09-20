import React, { Component } from "react";
import './css/style.css';

export class GetTodo extends Component {

    constructor(props) {
        super(props);
    }

    removeTodo = (todo, index)=> {
        return(
            <tr key={index} onClick={() => this.props.foo(index)}>
            <th scope="row">Click Todo For Delete <i class="far fa-trash-alt"></i></th>
            <td className="bg-danger myStyle">{todo}</td>
            </tr>
        );
    }

    render() {

        return (
            <div className="table-responsive">
                <table className="table table-bordered">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Todos</th>
    </tr>
  </thead>
  <tbody>
      {this.props.list.map(this.removeTodo)}
  </tbody>
</table>
            </div>
        );
    }   
}