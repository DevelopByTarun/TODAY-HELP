import React from "react";
import '../../css/style.css';

export const HomeContact = (props)=> {

    var addr = props.match.params.homeAddr;

    return(
<div>
    <br/>
    <h1 className="myStyle text-center text-capitalize">This Is Home Contact Component</h1>
    <br/>
    <h2 className="myStyle">Value Of Route Param Is ::&nbsp;&nbsp;
        <a className="text-danger">{addr}</a>
    </h2>
</div>
    );
}