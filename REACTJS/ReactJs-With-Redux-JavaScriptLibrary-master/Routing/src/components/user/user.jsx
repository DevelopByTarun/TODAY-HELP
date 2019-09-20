import React from "react";
import { NavLink } from 'react-router-dom';
import '../css/user.css';

export const User = (props)=> {

    var login = props.match.params.log;
    var register = props.match.params.reg;

    return(
<div>
    <br/>
    <h1 className="myStyle text-center text-capitalize">This Is User Component</h1>
    <br/>
    <ul>
        <li>
            <NavLink activeClassName="active myStyle" to="/user/login">
            <h3>{login}</h3>
            </NavLink>
        </li>
        <li>
            <NavLink activeClassName="active myStyle" to="/user/register/Tarun/gemini86.tarun@gmail.com/7503391867/Sector-18 Rohini">
                <h3>{register}</h3>
            </NavLink>
        </li>
    </ul>
</div>
    );
}