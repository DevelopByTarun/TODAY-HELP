import React from 'react';
import logo2 from './images/logo2.png';
import best from './images/Best-Price.png';
import flag from './images/flag.png';
import finalbanner from './images/finalBanner.jpg';

export const Header = ()=> {

    return(
        <div>
            
              <div id="fixed">
                <ul>
                    <li><a href="#"><i class="fa fa-bed" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-taxi" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-home" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-tag" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></a></li>
                </ul>
            </div>

            <div id="top_bar">
                <div class="container clearfix">
                    <div id="img1">
                        <img src={logo2} alt="logo"/>
                    </div>
                    <div id="img2">
                        <img src={best} alt="logo"/>
                    </div>
                    <div class="login">
                        <ul>
                            <li>
                            <a href="#">BOOK</a>
                            <div class="dropdown">
                             <ul>
                                <li><a href="#">Flights</a></li>
                                <li><a href="#">eCoupon</a></li>
                                <li><a href="#">JetEscape Holidays</a></li>
                                <li><a href="#">Hotels</a></li>
                                <li><a href="#">Car Rentalsl</a></li>
                                <li><a href="#">Flights+Hotel</a></li>
                            </ul>
                            </div>
                            </li>
                            <li><a href="#">MY TRIP</a></li>
                             <li><a href="#">LOGIN</a></li>
                             <li><a href="#"><img src={flag} alt="flag"/>-&nbsp;EN</a></li>
                             <li><a><i class="fa fa-search" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="banner">
            <div id="main_img">
               <img src={finalbanner} alt="banner"/>
           </div>
           <div id="form_1" class="container">
                  <form>
                      <tr>
                          <td><input type="radio" name="trip"/>Return</td>
                          <td><input type="radio" name="trip"/>One Way</td>
                      </tr>
                  </form>
            </div>
            <div id="form_2" class="container">
                <table>
                    <tr>
                        <td><input type="text" class="border" placeholder="   FROM"/></td>
                        <td><input type="text" placeholder="    TO"/></td>
                        <td><input type="date" placeholder="DEPART"/></td>
                        <td><input type="date"/></td>
                    </tr>
                </table>
            </div>
            <div id="main_heading">
                <div class="container">
                    <h>LONDON</h>
                </div>
                <div id="inr" class="contain">
                    <h2>INR <span>45,711</span> onwards</h2>
                    <h2>&nbsp;<i class="fa fa-plane" aria-hidden="true"></i>&nbsp;Starting Oct 29,2017</h2>
                </div>
                <div id="con">
                    <p>Conditions apply</p>
                </div>
            </div>
            </div>

        <div id="options">
           <div class="row">
               <div class="column">
                   <h>p</h>
               </div>
               <div class="column">
                   <h>PLAN YOUR TRAVEL</h>
               </div>
               <div class="column">
                   <h>TRAVEL INFORMATION</h>
               </div>
               <div class="column">
                   <h>JETPRIVILEGE</h>
               </div>
               <div class="column">
                   <h>JET EXPERIENCE</h>
               </div>
               <div class="column">
                   <h>p</h>
               </div>
           </div>
       </div>
    
        </div>
    );
}