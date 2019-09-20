import React from "react";
import { Component } from 'react';
import flag from './images/in-flag.png';
import footLogo from './images/footer_;ogo.jpg';

export class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                
<div id="footer" class="clearfix">
    <div class="prefooter clearfix">
        <div class="pumalogo">
            <img src={footLogo} alt="Puma" />
            <h6 class="rights">© 2017 PUMA All Rights Reserved</h6>
            <h5>REGION</h5>
            <div class="logcontent">
                <ul>
                    <li>
                        <a href="#" class="name">
                            <h6>India</h6>
                        </a>
                    </li>
                    <li class="india">
                        <a href="#">
                            <img src={flag} alt="india flag" />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="rightdir">
                            <i class="fa fa-chevron-right" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="side1">
            <h5>SHOP</h5>
            <ul>
                <li>
                    <a href="#">Men</a>
                </li>
                <li>
                    <a href="#">Women</a>
                </li>
                <li>
                    <a href="#">Sale</a>
                </li>
            </ul>

        </div>
        <div class="side2">
            <h5>CUSTOMER SERVICE</h5>
            <ul>
                <li>
                    <a href="#">Help</a>
                </li>
                <li>
                    <a href="#">Contact Us</a>
                </li>
                <li>
                    <a href="#">My Account</a>
                </li>
                <li>
                    <a href="#">Return Policy</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
                <li>
                    <a href="#">Terms of Use</a>
                </li>
                <li>
                    <a href="#">Payment Options</a>
                </li>
                <li>
                    <a href="#">Frequently Asked Questions</a>
                </li>
                <li>
                    <a href="#">Call Us</a>
                </li>
            </ul>
            <p class="customer-desktop">Call Us
                <br/>1800 102 7862
                <br/>MON-SAT : 09:00 - 19:00
                <br/>SUN : 10:00 - 17:00</p>
        </div>
        <div class="side3">
            <h5>ABOUT PUMA</h5>
            <ul>
                <li>
                    <a href="#">Company</a>
                </li>
                <li>
                    <a href="#">Press</a>
                </li>
                <li>
                    <a href="#">Investors</a>
                </li>
                <li>
                    <a href="#">Sustainability</a>
                </li>
                <li>
                    <a href="#">Careers</a>
                </li>
            </ul>
        </div>
        <div class="social">
            <h5>GET SOCIAL</h5>
            <ul>
                <li>
                    <a href="#">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i class="fa fa-google-plus-official" aria-hidden="true"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="powered">

        </div>
    </div>
</div>
<div class="footer-content">
    <div class="wrap_footer">
        <div class="content_wrap">
            <p>
                <strong>PUMA AT A GLANCE</strong> / PUMA is one of the world’s leading sports brands, designing, developing, selling
                and marketing footwear, apparel and accessories. For over 65 years, PUMA has established a history of making
                fast product designs for the fastest athletes on the planet. PUMA offers performance and sport-inspired lifestyle
                products in categories such as Football, Cricket, Running, Training & Fitness, Golf, and Motorsports. It
                engages in exciting collaborations with renowned design brands such as Alexander McQueen and Mihara Yasuhiro
                to bring innovative and fast designs to the sports world.
            </p>
            <p>
                The official PUMA Online Store offers a large selection of PUMA shoes, clothing, accessories, and equipment.
            </p>
            <p>
                PUMA’s family of star players in Football includes Sergio Agüero, Cesc Fàbregas, Marco Reus, Radamel Falcao, Olivier Giroud,
                Mario Balotelli, Luke Hodge, and Jaime Elliot and in women’s football, Brazilian powerhouse Marta, as well
                as a number of influential national and club teams, including four-time world champion Italy, Austria, Switzerland,
                Uruguay, Chile, Ghana, Ivory Coast and Cameroon, plus Borussia Dortmund, Newcastle United FC, Arsenal FC
                (from July 2014), Adelaide Crows and West Coast Eagles. The PUMA Running collection, notable for innovative
                new product like our FAAS and Mobium shoes, is represented by the fastest man in the world, sprinter Usain
                Bolt. (‘Nuff said.)
            </p>

            <p>
                In Golf, such game-changing athletes as Rickie Fowler, Lexi Thompson, Graham DeLaet, Greg Norman, and Will MacKenzie represent
                COBRA PUMA GOLF.
            </p>

            <p>
                PUMA’s sport-inspired lifestyle products include the PUMA Motorsport collection, which features officially licensed gear
                for example from Ferrari, BMW Motorsport, Mercedes AMG Petronas.
            </p>
            <p>
                PUMA has created famous sneaker styles such as the Suede, El Rey, Roma, Clyde, Mostro, Speed Cat, Basket, Disc Blaze, GV
                Special and Trinomic range –as well as icons-to-be like our Sport Lite styles and, for women, our oh-so-cool
                sneaker wedges and ballet flats.

            </p>
            <p>
                The company distributes its products in more than 120 countries, employs more than 10,000 people worldwide, and is headquartered
                in Herzogenaurach, Germany.
            </p>

            <p>
                <span>Official Online Retailer - Ace Turtle Services Private Limited. © 2017</span>| All Rights Reserved.
            </p>
        </div>
    </div>
</div>

            </div>
        );
    }
}