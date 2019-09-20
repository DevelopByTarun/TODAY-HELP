import React from 'react';
import last from './images/last_img.png';

export const Footer = ()=> {

    return(
        <div id="footer">

             <div id="footer1" class="container">
               <div id="row">
                  <div class="column4">
                      <h><strong>Corporate</strong></h>
                      <ul>
                          <li><a href="#">Investor Information</a></li>
                          <li><a href="#">About Jet Airways</a></li>
                          <li><a href="#">Careers</a></li>
                      </ul>
                  </div>
                  <div class="column8">
                      <h><strong>Legal</strong></h>
                      <ul>
                          <li><a href="#">Terms & Conditions</a></li>
                          <li><a href="#">Policies</a></li>
                          <li><a href="#">Disclaimer</a></li>
                      </ul>
                  </div>
                  <div class="column5">
                      <h><strong>Media Centre</strong></h>
                      <ul>
                          <li><a href="#">Press Releases</a></li>
                          <li><a href="#">Media Contacts</a></li>
                      </ul>
                  </div>
                  <div class="column6">
                      <h><strong>Support</strong></h>
                      <ul>
                          <li><a href="#">Contact Us</a></li>
                          <li><a href="#">FAQs</a></li>
                          <li><a href="#">Baggage</a></li>
                          <li><a href="#">Special Assistance</a></li>
                          <li><a href="#">Feedback</a></li>
                      </ul>
                  </div>
                  <div class="column7">
                      <h><strong>Others</strong></h>
                      <ul>
                          <li><a href="#">Optional Charges</a></li>
                          <li><a href="#">Explore</a></li>
                          <li><a href="#">Subscribe for Offers</a></li>
                          <li><a href="#">Fare Sheets</a></li>
                          <li><a href="#">Sitemap</a></li>
                      </ul>
                  </div> 
               </div> 
               
               <div id="logos">
                   <ul>
                       <li><a href="#"><i class="fa fa-apple" aria-hidden="true"></i></a></li>
                       <li><a href="#"><i class="fa fa-android" aria-hidden="true"></i></a></li>
                       <li><a href="#"><i class="fa fa-windows" aria-hidden="true"></i></a></li>
                       <li><a href="#"><i class="fa fa-apple" aria-hidden="true"></i></a></li>
                   </ul>
               </div>
               
               <div id="last_img" class="container">
                   <img src={last} alt="last"/>
               </div>
           </div>

            <div id="footer2">
               <div id="copy" class="container">
                  <div id="copy1">
                     <p>&copy;&nbsp;Jet Airways (India) Ltd. All rights reserved.</p> 
                  </div>
               </div>
               <div id="links" class="container">
                   <ul>
                       <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                       <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                       <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                       <li><a href="#"><i class="fa fa-youtube-play"></i></a></li>
                       <li><a href="#"><i class="fa fa-linkedin-square"></i></a></li>
                       <li><a href="#"><i class="fa fa-flickr"></i></a></li>
                       <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                       <li><a href="#"><i class="fa fa-foursquare"></i></a></li>
                   </ul>
               </div>
           </div>

        </div>
    );
}