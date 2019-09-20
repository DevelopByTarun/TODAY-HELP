import React from 'react';
import img1 from './images/img_1.jpg';
import img2 from './images/img_2.jpg';
import img3 from './images/img_3.jpg';
import img4 from './images/img_4.png';

export const Content = ()=> {

    return(
      <div id="content1">

           <div id="content" class="container">
           <div id="row1">
               <div class="column1">
                   <a><img src={img1} alt="img"/></a>
               </div>
               <div class="column1">
                   <img src={img1} alt="img"/>
               </div>
           </div>
           <div id="row2">
               <div class="column2">
                   <img src={img2} alt="img"/>
                   <h2>&nbsp;Pay with MobiKwik and get &nbsp;upto INR 300 cashback!</h2>
                   <p>&nbsp;&nbsp;Exclusively on our website & app.</p>
                   <p>&nbsp;&nbsp;More >></p>
               </div>
               <div class="column2">
                   <img src={img3} alt="img"/>
                   <h2>&nbsp;Pay with MobiKwik and get &nbsp;upto INR 300 cashback!</h2>
                   <p>&nbsp;&nbsp;Exclusively on our website & app.</p>
                   <p>&nbsp;&nbsp;More >></p>
               </div>
               <div class="column2">
                   <img src={img2} alt="img"/>
                   <h2>&nbsp;Pay with MobiKwik and get &nbsp;upto INR 300 cashback!</h2>
                   <p>&nbsp;&nbsp;Exclusively on our website & app.</p>
                   <p>&nbsp;&nbsp;More >></p>
               </div>
           </div>
           <div id="row3">
              <div class="column3">
                  <div id="img">
                      <div class="img_4">
                          <img src={img4} alt="img"/>
                      </div>
                      <div class="para">
                          <h2>Get lucky with Jetprivilege Raffles</h2>
                          <p>
                              Redeem 200 JPMiles and stand a chance to win Samsung Galaxy S8. Valid till May31,2017
                          </p>
                          <p>More >></p>
                      </div>
                  </div>
              </div>
              <div class="column3">
                  <div id="img">
                      <div class="img_4">
                          <img src={img4} alt="img"/>
                      </div>
                      <div class="para">
                          <h2>Get lucky with Jetprivilege Raffles</h2>
                          <p>
                              Redeem 200 JPMiles and stand a chance to win Samsung Galaxy S8. Valid till May31,2017
                          </p>
                          <p>More >></p>
                      </div>
                  </div>
              </div>                
           </div>
           </div>

       </div>
    );
}