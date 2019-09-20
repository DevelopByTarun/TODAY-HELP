import React, { Component } from "react";
import { AddTodo } from './addTodo/addTodo';
import { GetTodo } from './getTodo/getTodo';

export class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: ["tarun", "varun"]
        }
    }

    addNewTodo(todo) {
        this.setState({
            // todos: this.state.todos.concat([todo]),
            todos: [todo, ...this.state.todos]
        });
    }

    removeNewTodo(index) {
        this.setState({
            todos: this.state.todos.filter((todo, i)=> {
                return i !== index;
            })
        });
    }

    render () {

        const myStyle = {
            heading: {
                textAlign: "center",
                fontFamily: "gothic"
            }
        }
        
        return (
            <div>
                <h1 style={myStyle.heading}>{this.props.head}</h1>
                <br/>
                <br/>
                <AddTodo foo={this.addNewTodo.bind(this)} lab="Add New Todo"/>
                <br/>
                <br/>
                <GetTodo list={this.state.todos} foo={this.removeNewTodo.bind(this)}/>
            </div>
        )
    }
    
}