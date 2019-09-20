import React, { Component } from "react";
import { Result } from './result/result';

export class LifeCycle extends Component {

    constructor (props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    increment() {
        this.setState({ counter: this.state.counter + 1 });
    }

    render () {

        var mtStyle = {
            textAlign: "center",
            fontFamily: "gothic"
        }

        return (
            <div>
                <h1 style={mtStyle}>{this.props.head}</h1>
                <br/>
                <button type="button" onClick={this.increment.bind(this)} class="btn btn-dark">
                    {this.props.bt}
                </button>
                <br/><br/>
                <Result data={this.state.counter}/>
            </div>
        )
    }
    
}