import React, { Component } from 'react';
import style from '../styles/Footer.module.css';
// const instagram = require("../public/images/instagram.png");

class Footer extends Component {
    render() {
        return (
            <div id={style.footer}>
                <a href="https://www.instagram.com/tiffanyandcardco/" target="_blank"><img src="/images/instagram.png"/></a>
            </div>
        );
    }
}

export default Footer;