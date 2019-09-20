import React, { Component } from "react";

export class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: ''
        }
    }

    handleChange(event) {
        this.setState({
            todo: event.target.value
        });
    }

    // addTodo() {
    //     this.props.foo(this.state.todo);
    //     this.setState({
    //         todo: ''
    //     });
    // }

    keyPressInput = (event)=> {
        if(event.key !== "Enter") return;
        if (!this.state.todo) return;
        this.props.foo(this.state.todo);
        this.setState({
            todo: ''
        });
    }

    render() {
        return (
            <div>
                <form>
  <div class="form-group row">
    <label for="inputPassword" className="col-sm-2 col-form-label"><strong>{this.props.lab}&nbsp;::&nbsp;</strong></label>
    <div class="col-sm-10">
      <input type="text" onChange={this.handleChange.bind(this)} onKeyPress={this.keyPressInput} className="form-control form-control-lg is-invalid" id="inputPassword" placeholder="Type Here Then Enter"/>
    </div>
  </div>
</form>
            </div>
        );
    }
    
}