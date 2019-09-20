import React from "react";
import '../../css/style.css';

export const Register = (props)=> {

    var name = props.match.params.name;
    var email = props.match.params.email;
    var no = props.match.params.mobileNo;
    var address = props.match.params.addr;

    return(
        <div>
<br/>
<br/>
<h1 className="myStyle text-center text-capitalize">This Is Register Component</h1>
<br/>
<h2 className="myStyle">Value Of Route Param Is Given Below ::</h2>
<h2 className="text-danger myStyle">{name}</h2>
<h2 className="text-danger myStyle">{email}</h2>
<h2 className="text-danger myStyle">{no}</h2>
<h2 className="text-danger myStyle">{address}</h2>
        </div>
    );
}