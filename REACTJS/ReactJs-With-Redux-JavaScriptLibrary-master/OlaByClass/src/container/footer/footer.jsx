import React from "react";
import { Component } from 'react';
import google from './images/footer_google_plus.jpg';
import twitter from './images/footer_twitter.jpg';
import facebook from './images/facebook.jpg';

export class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                
<div id="footer">
    <hr/>
    <div class="section1">
        <ul>
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>
            <li>
                <a href="#">Careers</a>
            </li>
            <li>
                <a href="#">FAQs</a>
            </li>
            <li>
                <a href="#">Terms and Conditions</a>
            </li>
            <li>
                <a href="#">Privacy Policy</a>
            </li>
            <li>
                <a href="#">CSR Policy</a>
            </li>
            <li>
                <a href="#">Offers</a>
            </li>
            <li>
                <a href="#">Fares</a>
            </li>
            <li>
                <a href="#">Invoice</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Media Centre</a>
            </li>
            <li class="fb">
                <a href="#" class="font_awesome">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
            </li>
            <li class="twt">
                <a href="#" class="font_awesome">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
            </li>
            <li class="google">
                <a href="#" class="font_awesome">
                    <i class="fa fa-google-plus" aria-hidden="true"></i>
                </a>
            </li>
        </ul>
    </div>
    <div class="section2">
        <ul>
            <li>
                <p>Copyright © 2016 ANI Technologies Pvt. Ltd. All rights reserved.</p>
            </li>
            <li>
                <a href="#">
                    <img src={google} alt="google_counter" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={twitter} alt="twitter counter" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={facebook} alt="facebook_counter" />
                </a>
            </li>
        </ul>
    </div>
</div>

            </div>
        );
    }
}