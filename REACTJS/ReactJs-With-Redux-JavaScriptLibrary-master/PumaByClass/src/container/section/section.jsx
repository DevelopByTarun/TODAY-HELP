import React from "react";
import { Component } from 'react';
import slide1 from './images/slider1.png';
import slide2 from './images/slider2.png';
import slide3 from './images/slider3.png';
import slide4 from './images/slider4.png';
import slide5 from './images/slider5.png';
import pop1 from './images/popup1.jpg';
import pop2 from './images/popup2.jpg';
import pop3 from './images/popup3.jpg';
import shoe1 from './images/shoe1.jpg';
import shoe2 from './images/shoe2.jpg';
import shoe3 from './images/shoe3.jpg';
import shoe4 from './images/shoe4.jpg';
import c1 from './images/circle1.jpg';
import c2 from './images/circle2.jpg';
import c3 from './images/circle3.jpg';

export class Section extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>

<div id="slide-show">
    <div id="slider-pics" class="clearfix">
        <figure class="clearfix">
            <img src={slide1} alt="pic1" />
            <img src={slide2} alt="pic2" />
            <img src={slide3} alt="pic3" />
            <img src={slide4} alt="pic4" />
            <img src={slide5} alt="pic5" />
        </figure>
    </div>
</div>
<div id="shoesSection">
    <h2>TRENDING
        <span> NOW </span>
    </h2>
    <div class="popup-screen">
        <ul>
            <li>
                <img src={pop1} alt="pic6" class="shoe1" />
                <h3>THE VIKKY PLATFORM</h3>
                <h4>REACH NEW HEIGHTS LITERALLY</h4>
                <a href="#">SHOP VIKKY PLATFORM</a>
                <a href="#" class="anchor1">SHOP SPORTSTYLE</a>
            </li>
            <li class="shoe2">
                <img src={pop2} alt="pic7" />
                <h3>PUMA x BMW</h3>
                <h4>INTRODUCING THE LATEST BMW MOTORSPORTS
                    <br/>
                    <span> COLLECTION</span>
                </h4>
                <a href="#">SHOP BMW</a>
                <a href="#" class="anchor2">SHOP MOTORSPORT</a>
            </li>
            <li class="shoe3">
                <img src={pop3} alt="pic8" />
                <h3>SPEED 300</h3>
                <h4>ENGINEERED TO PROPEL YOU PAST YOUR
                    <br/>
                    <span>GOALS</span>
                </h4>
                <a href="#">SHOP SPEED 300</a>
                <a href="#" class="anchor3">SHOP RUNNING</a>
            </li>
        </ul>
    </div>
</div>
<div class="newArrival">
    <div class="wrapper_new">
        <h3>NEW ARRIVALS</h3>
        <ul>
            <li>
                <a href="#">
                    <img src={shoe1} alt="shoe1" />
                    <div class="type">
                        <h6>Basket Heart Patent Women's
                            <br/>
                            <span>Snaekers</span>
                        </h6>
                    </div>
                    <div class="price">
                        <h5>₹5,999</h5>
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={shoe2} alt="shoe2" />
                    <div class="type">
                        <h6>IGNITE Limitless Extreme Hi-Tech
                            <br/>
                            <span>Men's Sportstyle Shoes</span>
                        </h6>
                    </div>
                    <div class="price">
                        <h5>₹14,999</h5>
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={shoe3} alt="shoe3" />
                    <div class="type">
                        <h6>evoPOWER Vigor 1 FG Men's
                            <br/>
                            <span>Teamsports Shoes</span>
                        </h6>
                    </div>
                    <div class="price">
                        <h5>₹14,999</h5>
                    </div>
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={shoe4} alt="shoe4" />
                    <div class="type">
                        <h6>IGNITE 3 Men's Running Shoes</h6>
                    </div>
                    <div class="price">
                        <h5>₹9,999</h5>
                    </div>
                </a>
            </li>
            <li>
                <i class="fa fa-angle-right right" aria-hidden="true"></i>
            </li>
            <li>
                <i class="fa fa-angle-left left" aria-hidden="true"></i>
            </li>
        </ul>
    </div>
</div>
<div class="banner">
    <div class="banner-img">

    </div>
</div>
<div class="shopPuma">
    <div class="wrap_shop">
        <h2>
            <span>SHOP </span>PUMA</h2>
        <ul>
            <li>
                <a href="#">
                    <img src={c1} alt="mens" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={c2} alt="womens" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src={c3} alt="kids" />
                </a>
            </li>
        </ul>
    </div>
</div>
<div class="yt_video">
    <div class="wrap_video">
        <h2>PUMA MOTORSPORT</h2>
        <iframe width="853" height="480" src="https://www.youtube.com/embed/x_xW8EXStTc" frameborder="0" allowfullscreen class="video"></iframe>
    </div>
</div>
<div class="email">
    <div class="wrap_email">
        <div class="newsletter-box">
            <div class="letterimage">

            </div>
            <div class="lettercontent">
                <div class="letter-heading">
                    <h6>EMAIL SIGN UP</h6>
                </div>
                <div class="letterform">
                    <form action="#" method="post">
                        <input type="text" placeholder="ENTER YOUR EMAIL" />
                        <div class="enter clearfix">
                            <i class="fa fa-caret-right" aria-hidden="true"></i>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="pumastore-box">
            <div class="storeimage">

            </div>
            <div class="storecontent">
                <div class="store-heading">
                    <h6>Find a PUMA Store</h6>
                </div>
                <div class="storeform">
                    <form action="#" method="post">
                        <input type="text" placeholder="ENTER PINCODE OR CITY NAME" />
                        <div class="entershop enter">
                            <i class="fa fa-caret-right" aria-hidden="true"></i>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

            </div>
        );
    }
}