import React from "react";
import { Component } from 'react';
import { Header } from './header/header';
import { Section } from './section/section';
import { Footer } from './footer/footer';
import './css/style.css';

export class Ola extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div id="conainer">
                <Header/>
                <Section/>
                <Footer/>
            </div>
        );
    }
}