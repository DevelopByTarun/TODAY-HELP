import React from "react";
import { Component } from 'react';
import { Header } from './header/header';
import { Section } from './section/section';
import { Footer } from './footer/footer';
import './css/style.css';

export class Puma extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div id="container">
                <Header/>
                <Section/>
                <Footer/>
            </div>
        );
    }
}