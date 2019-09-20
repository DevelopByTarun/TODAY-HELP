import React from "react";
import '../css/style.css';

export const FinalReport = (props)=> {

    const query = new URLSearchParams(props.location.search);
    let value = "";
    for (let param of query.entries()) {
       value +=param;
    }

    return(
<div>
    <br/>
    <h1 className="myStyle text-center text-capitalize">This Is Final Report Component</h1>
    <br/>
    <h2 className="myStyle">Value Of Query Param Is ::&nbsp;&nbsp;
        <a className="text-danger">{value}</a>
    </h2>
</div>
    );
}