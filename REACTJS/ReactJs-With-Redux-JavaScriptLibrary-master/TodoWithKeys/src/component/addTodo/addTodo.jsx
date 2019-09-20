import React, { Component } from "react";

export class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: ''
        }
    }

    getItem(event) {
        this.setState({
            item: event.target.value
        });
    }

    addItem() {
        this.props.foo(this.state.item);
        this.setState({
            item: ''
        });
    }

    render() {
        return (
            <div>
                <form>
  <div class="form-group row">
  <button type="button" onClick={this.addItem.bind(this)} for="inputPassword" className="btn btn-dark btn-lg col-sm-2 col-form-label">
  {this.props.btText}
  </button>
    <div class="col-sm-10">
      <input type="text" onChange={this.getItem.bind(this)} class="form-control form-control-lg is-invalid" id="inputPassword" placeholder="Enter Item...."/>
    </div>
  </div>
</form>
            </div>
        );
    } 
}