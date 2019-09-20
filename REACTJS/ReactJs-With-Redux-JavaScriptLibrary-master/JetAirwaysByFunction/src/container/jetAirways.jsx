import React from 'react';
import {Header} from './header/header';
import {Content} from './content/content';
import {Footer} from './footer/footer';
import './css/jetairways.css';
import "../../node_modules/font-awesome/css/font-awesome.min.css";

export const JetAirways = ()=> {

    return(
        <div id="container">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    );
}