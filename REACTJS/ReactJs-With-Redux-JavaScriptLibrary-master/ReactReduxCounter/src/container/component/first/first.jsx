import React, { Component } from "react";
import { Store } from '../../model/store/store';

export class First extends Component {

    constructor(props) {
        super(props);
        this.count = 0;
        this.state = {
            counter: this.count
        }
    }

    increment() {
        Store.dispatch({
            type: "PLUS",
            payload: {
                value: 2
            }
        });
    }

    decrement() {
        Store.dispatch({
            type: "MINUS",
            payload: {
                value: 2
            }
        });
    }

    render() {
        return (
            <div>
                <button type="button" class="btn btn-warning btn-lg" onClick={this.increment.bind(this)}>
                    For Increment
                </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" class="btn btn-danger btn-lg" onClick={this.decrement.bind(this)}>
                    For Decrement
                </button>
            </div>
        );
    }
    
}
