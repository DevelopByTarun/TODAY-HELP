import React from "react";
import '../../css/style.css';

export const OfficeContact = (props)=> {

    var oaddr = props.match.params.officeAddr;

    return(
<div>
    <br/>
    <h1 className="myStyle text-center text-capitalize">This Is Office Contact Component</h1>
    <br/>
    <h2 className="myStyle">Value Of Route Param Is ::&nbsp;&nbsp;
        <a className="text-danger">{oaddr}</a>
    </h2>
</div>
    );
}