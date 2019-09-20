import React, { Component } from "react";
import { AddTodo } from './addTodo/addTodo';
import { GetTodo } from './getTodo/getTodo';

export class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: ['shoes', 'MacBookPro', 'Desktop']
        }
    }

    addNewTodo(item) {
        this.setState({
            items: this.state.items.concat([item])
        });
    }

    render() {

        var myStyle = {
            fontFamily: "cursive",
            textAlign: "center"
        }

        return (
            <div>
                <h1 style={myStyle}>{this.props.head}</h1>
                <br/>
                <br/>
                <AddTodo foo={this.addNewTodo.bind(this)} btText="Add Item"/>
                <br/>
                <br/>
                <GetTodo list={this.state.items}/>
            </div>
        );
    }
    
}