import React from "react";
import { First } from './component/first/first';
import Second from './component/second/second';

export const Counter = (props)=> {

    var myStyle = {
        textAlign: "center",
        fontFamily: "cursive"
    }

    return(
        <div>
            <h1 style={myStyle}>{props.head}</h1>
            <br/>
            <br/>
            <First/>
            <br/>
            <br/>
            <Second/>
        </div>
    );
}