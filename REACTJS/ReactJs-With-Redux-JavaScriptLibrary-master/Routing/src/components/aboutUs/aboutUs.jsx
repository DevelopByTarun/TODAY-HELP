import React from "react";
import '../css/style.css';

export const AboutUs = (props)=> {

    var desc = props.match.params.description;

    return(
        <div>
<br/>
<h1 className="myStyle text-center text-capitalize">This Is About Us Component</h1>
<br/>
<h2 className="myStyle">Value Of Route Param Is ::&nbsp;&nbsp;
    <a className="text-danger">{desc}</a>
</h2>
        </div>
    );
}