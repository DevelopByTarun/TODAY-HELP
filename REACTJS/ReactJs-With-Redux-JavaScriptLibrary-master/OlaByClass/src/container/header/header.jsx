import React from "react";
import { Component } from 'react';
import logo from './images/Ola_Cabs_logo.png';

export class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                
<div id="header">
    <div class="container clearfix">
        <div class="logo">
            <img src={logo} alt="ola_cab_logo" />
        </div>
        <div class="main-navigation">
            <ul>
                <li>
                    <a href="#">Cab Fares</a>
                </li>
                <li>
                    <a href="#">Support</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </div>
        <div class="secondary-navigation">
            <ul>
                <li>
                    <a href="#">Ola Fleet</a>
                </li>
                <li>|</li>
                <li>
                    <a href="#">Shuttle</a>
                </li>
                <li>|</li>
                <li>
                    <a href="#">Ola Corporate</a>
                </li>
                <li>|</li>
                <li>
                    <a href="#">Ola Money</a>
                </li>
                <li>|</li>
                <li>
                    <a href="#">Ola Play</a>
                </li>
            </ul>
            <div class="attributes">
                <ul>
                    <li class="search_box">
                        <input type="text" id="search" placeholder="Enter 10 digit number" /> </li>
                    <li class="button1">
                        <input type="submit" value="Get Link" id="button1" /> </li>
                </ul>
            </div>
            <div class="para">
                <p>Get link to download Ola cabs app via SMS</p>
            </div>
        </div>
    </div>
</div>

            </div>
        );
    }
}