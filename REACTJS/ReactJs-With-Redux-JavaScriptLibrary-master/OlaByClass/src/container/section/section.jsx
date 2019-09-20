import React from "react";
import { Component } from 'react';
import slide from './images/on_slider.jpg';
import like from './images/like.png';
import verify from './images/verified.png';
import ruppes from './images/ruppees.png';

export class Section extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                
<div class="Slider">
    <div class="wrap">
        <p>Presenting</p>
    </div>
    <div class="image1">
        <img src={slide} alt="on_slider" /> </div>
</div>
<div class="buttons2 clearfix">
    <ul>
        <li>
            <input type="submit" value="WATCH KEYNOTE" id="button_watch" /> </li>
        <li>
            <input type="submit" value="FIND OUT MORE" id="button_find" /> </li>
    </ul>
</div>
<div class="below_slider">
    <div class="wallpaper"> </div>
    <div id="section">
        <div class="container">
            <ul>
                <li>
                    <div class="title clearfix">
                        <img src={like} alt="like" />
                        <h3>Convenience</h3>
                    </div>
                    <div class="description">
                        <p>Book within seconds and get instant
                            <br/> confirmations. Easy online payments or
                            <br/>cash on delivery. Booking car rentals will
                            <br/> never be a headache again!</p>
                    </div>
                </li>
                <li>
                    <div class="title clearfix">
                        <img src={verify} alt="verify" />
                        <h3>Quality</h3>
                    </div>
                    <div class="description">
                        <p>Our cars are audited for cleanliness, safety
                            <br/> and comfort. Our drivers are well trained
                            <br/> and reliable. Sit back and enjoy the Ola
                            <br/> experience!</p>
                    </div>
                </li>
                <li>
                    <div class="title clearfix">
                        <img src={ruppes} alt="like" />
                        <h3>Control</h3>
                    </div>
                    <div class="description">
                        <p>We have clear and transparent pricing listed
                            <br/> online. Never haggle with drivers again on
                            <br/> payments and be confident and assured of
                            <br/> what you are being charged for!</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>

            </div>
        );
    }
}