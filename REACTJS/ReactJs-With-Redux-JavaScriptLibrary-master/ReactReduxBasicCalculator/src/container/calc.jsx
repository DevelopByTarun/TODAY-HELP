import React, { Component } from "react";
import { Operations } from './component/operations/operations';
import Result from './component/result/result';

export class Calc extends Component {

    constructor(props) {
        super(props);
    }

    render () {

        var myStyle = {
            fontStyle: "gothic",
            textCapitalize: "capitalize",
            textAlign: "center"
        }

        var opr = {
            bta: "Addition",
            bts: "Subtraction",
            btm: "Multiplication",
            btd: "Division",
            btc: "Clear All"
        }

        return (
            <div>
                <h1 style={myStyle}>
                    {this.props.head}
                </h1>
                <br/>
                <br/>
                <Operations num1Lab="First Number" num2Lab="Second Number" opr={opr}/>
                <br/>
                <br/>
                <Result/>
            </div>
        );
    }
    
}