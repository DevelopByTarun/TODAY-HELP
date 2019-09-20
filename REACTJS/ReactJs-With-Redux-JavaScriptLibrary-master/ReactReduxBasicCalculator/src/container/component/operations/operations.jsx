import React, { Component } from "react";
import { Store } from '../../store/store';

export class Operations extends Component {

    constructor(props) {
        super(props);
    }

    additionOpr() {
        Store.dispatch({
            type: "ADDITION",
            payload: {
                firstNumber: this.refs.fNo.value,
                secondNumber: this.refs.sNo.value
            }
        });
    }

    subtractionOpr() {
        Store.dispatch({
            type: "SUBTRACTION",
            payload: {
                firstNumber: this.refs.fNo.value,
                secondNumber: this.refs.sNo.value
            }
        });
    }

    multiplicationOpr() {
        Store.dispatch({
            type: "MULTIPLICATION",
            payload: {
                firstNumber: this.refs.fNo.value,
                secondNumber: this.refs.sNo.value
            }
        });
    }

    divisionOpr() {
        Store.dispatch({
            type: "DIVISION",
            payload: {
                firstNumber: this.refs.fNo.value,
                secondNumber: this.refs.sNo.value
            }
        });
    }

    resetAllFields() {
        var texts = document.querySelectorAll("input[type='text']");
        for(let i = 0; i < texts.length; i++) {
            texts[i] = '';
        }
    }

    render() {
        return (
            <div>
<form>
    <div className="form-group row">
        <label for="inputEmail3" className="col-sm-2 col-form-label">
            <strong>{this.props.num1Lab}</strong>&nbsp;&nbsp;::</label>
        <div className="col-sm-10">
            <input type="text" ref="fNo" className="form-control is-valid" id="inputEmail3" placeholder="Type Here...."
            />
        </div>
    </div>
    <div className="form-group row">
        <label for="inputPassword3" className="col-sm-2 col-form-label">
            <strong>{this.props.num2Lab}</strong>&nbsp;&nbsp;::</label>
        <div className="col-sm-10">
            <input type="text" ref="sNo" className="form-control is-valid" id="inputPassword3" placeholder="Type Here...."
            />
        </div>
    </div>
    <div className="form-group row">
        <label for="inputPassword3" className="col-sm-2 col-form-label"></label>
        <div className="col-sm-10">
            <button type="submit" onClick={this.additionOpr.bind(this)} className="btn btn-primary">
                <strong>{this.props.opr.bta}</strong>
            </button>&nbsp;&nbsp;&nbsp;
            <button type="submit" onClick={this.subtractionOpr.bind(this)} className="btn btn-success">
                <strong>{this.props.opr.bts}</strong>
            </button>&nbsp;&nbsp;&nbsp;
            <button type="submit" onClick={this.multiplicationOpr.bind(this)} className="btn btn-warning">
                <strong>{this.props.opr.btm}</strong>
            </button>&nbsp;&nbsp;&nbsp;
            <button type="submit" onClick={this.divisionOpr.bind(this)} className="btn btn-dark">
                <strong>{this.props.opr.btd}</strong>
            </button>&nbsp;&nbsp;&nbsp;
            <button type="submit" onClick={this.resetAllFields.bind(this)} className="btn btn-danger">
                <strong>{this.props.opr.btc}</strong>
            </button>
        </div>
    </div>
</form>
            </div>
        );
    }
}