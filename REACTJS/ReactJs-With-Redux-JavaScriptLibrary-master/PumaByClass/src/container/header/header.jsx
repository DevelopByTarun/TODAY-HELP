import React from "react";
import { Component } from 'react';
import flag from './images/in-flag.png';
import logo from './images/puma logo.png';

export class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                
<div id="header">
    <div class="header-bar">
        <ul>
            <li>
                <a href="#">Email Sign Up</a>
            </li>
            <li>
                <a href="#">Customer Service</a>
            </li>
            <li>
                <a href="#">Find a Store</a>
            </li>
            <li>
                <a href="#">Sign In</a>
            </li>
            <li>
                <a href="#">India
                    <div class="in-flag">
                        <a href="#">
                            <img src={flag} class="india" alt="in-flag" />

                            <i class="fa fa-chevron-down arrow" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div class="arrow"> </div>
                </a>
            </li>
        </ul>
    </div>
    <div class="logo-bar" id="sticky-anchor">
        <div id="stick">
            <div class="main-nav clearfix">
                <div class="logo">
                    <img src={logo} alt="puma" />
                </div>
                <div class="navigation">
                    <ul>
                        <li>
                            <a class="trial" href="#">Men</a>
                            <div class="dropdown">
                                <div class="wrap">
                                    <div class="list">
                                        <h3>FEATURED</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Boris Becker Picks</a>
                                            </li>
                                            <li>
                                                <a href="#">Bolt Collection</a>
                                            </li>
                                            <li>
                                                <a href="#">Ignite</a>
                                            </li>
                                            <li>
                                                <a href="#">Arsenal</a>
                                            </li>
                                            <li>
                                                <a href="#">Evopower</a>
                                            </li>
                                            <li>
                                                <a href="#">Evospeed</a>
                                            </li>
                                            <li>
                                                <a href="#">Classics</a>
                                            </li>
                                            <li>
                                                <a href="#">New Arrivals</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="image">
                                        <h3>SHOES</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Running</a>
                                            </li>
                                            <li>
                                                <a href="#">Training</a>
                                            </li>
                                            <li>
                                                <a href="#">Motorsport</a>
                                            </li>
                                            <li>
                                                <a href="#">Sandals</a>
                                            </li>
                                            <li>
                                                <a href="#">Teamsports</a>
                                            </li>
                                            <li>
                                                <a href="#">Sportstyle</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="list1">
                                        <h3>CLOTHING</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Tees</a>
                                            </li>
                                            <li>
                                                <a href="#">Polos</a>
                                            </li>
                                            <li>
                                                <a href="#">Pants</a>
                                            </li>
                                            <li>
                                                <a href="#">Shorts</a>
                                            </li>
                                            <li>
                                                <a href="#">Jackets</a>
                                            </li>
                                            <li>
                                                <a href="#">Tracksuits</a>
                                            </li>
                                            <li>
                                                <a href="#">Swimwear</a>
                                            </li>
                                            <li>
                                                <a href="#">Sweatshirts</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="list2">
                                        <h3>ACCESSORIES</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Backpacks</a>
                                            </li>
                                            <li>
                                                <a href="#">Bags</a>
                                            </li>
                                            <li>
                                                <a href="#">Wallets</a>
                                            </li>
                                            <li>
                                                <a href="#">Belts</a>
                                            </li>
                                            <li>
                                                <a href="#">Caps</a>
                                            </li>
                                            <li>
                                                <a href="#">Miscellaneous</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="list3">
                                        <h3>SPORT</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Running</a>
                                            </li>
                                            <li>
                                                <a href="#">Training</a>
                                            </li>
                                            <li>
                                                <a href="#">Football</a>
                                            </li>
                                            <li>
                                                <a href="#">Cricket</a>
                                            </li>
                                            <li>
                                                <a href="#">Motorsport</a>
                                            </li>

                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a class="trial" href="#">Women</a>
                            <div class="dropdown">
                                <div class="wrap">
                                    <div class="list">
                                        <h3>FEATURED</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Fenty Collection</a>
                                            </li>
                                            <li>
                                                <a href="#">#DOYOU</a>
                                            </li>
                                            <li>
                                                <a href="#">Sportstyle</a>
                                            </li>
                                            <li>
                                                <a href="#">Ignite</a>
                                            </li>
                                            <li>
                                                <a href="#">Classics</a>
                                            </li>
                                            <li>
                                                <a href="#">Pulse XT</a>
                                            </li>
                                            <li>
                                                <a href="#">New Arrivals</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="image">
                                        <h3>SHOES</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Running</a>
                                            </li>
                                            <li>
                                                <a href="#">Training</a>
                                            </li>
                                            <li>
                                                <a href="#">Motorsport</a>
                                            </li>
                                            <li>
                                                <a href="#">Sandals</a>
                                            </li>
                                            <li>
                                                <a href="#">Sportstyle</a>
                                            </li>

                                        </ul>

                                    </div>
                                    <div class="list1">
                                        <h3>CLOTHING</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Tees</a>
                                            </li>
                                            <li>
                                                <a href="#">Tanks</a>
                                            </li>
                                            <li>
                                                <a href="#">Sweatshirts</a>
                                            </li>
                                            <li>
                                                <a href="#">Jackets</a>
                                            </li>
                                            <li>
                                                <a href="#">Capris</a>
                                            </li>
                                            <li>
                                                <a href="#">Shorts</a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div class="list2">
                                        <h3>ACCESSORIES</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Backpacks</a>
                                            </li>
                                            <li>
                                                <a href="#">Bags</a>
                                            </li>
                                            <li>
                                                <a href="#">Wallets</a>
                                            </li>
                                            <li>
                                                <a href="#">Belts</a>
                                            </li>
                                            <li>
                                                <a href="#">Caps</a>
                                            </li>
                                            <li>
                                                <a href="#">Miscellaneous</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="list3">
                                        <h3>SPORT</h3>
                                        <ul>
                                            <li>
                                                <a href="#">Running</a>
                                            </li>
                                            <li>
                                                <a href="#">Training</a>
                                            </li>
                                            <li>
                                                <a href="#">Motorsport</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a class="trial" href="#">kids</a>
                        </li>
                        <li>
                            <a class="trial" href="#">Sports</a>
                        </li>
                        <li>
                            <a class="trial trial1" href="#">Collection</a>
                        </li>
                        <li>
                            <a class="trial" href="#">Sale
                                <div class="dropdown">
                                    <div class="wrap wrap_sale">
                                        <div class="list sale_male">
                                            <h3>FEATURED</h3>
                                            <ul>
                                                <li class="li1">
                                                    <a href="#">Fenty Collection</a>
                                                </li>
                                                <li>
                                                    <a href="#">#DOYOU</a>
                                                </li>
                                                <li>
                                                    <a href="#">Sportstyle</a>
                                                </li>
                                                <li>
                                                    <a href="#">Ignite</a>
                                                </li>
                                                <li>
                                                    <a href="#">Classics</a>
                                                </li>
                                                <li>
                                                    <a href="#">Pulse XT</a>
                                                </li>
                                                <li>
                                                    <a href="#">New Arrivals</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="image sale_female">
                                            <h3>SHOES</h3>
                                            <ul>
                                                <li>
                                                    <a href="#">Running</a>
                                                </li>
                                                <li>
                                                    <a href="#">Training</a>
                                                </li>
                                                <li>
                                                    <a href="#">Motorsport</a>
                                                </li>
                                                <li>
                                                    <a href="#">Sandals</a>
                                                </li>
                                                <li>
                                                    <a href="#">Sportstyle</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="sec-nav">
                <form action="#" method="post">
                    <div class="search-box">
                        <input type="text" placeholder="I am looking for..." />

                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                </form>
                <span class="cart"></span>
            </div>
        </div>
    </div>
</div>

            </div>
        );
    }
}