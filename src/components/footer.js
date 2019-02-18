import React, {Component} from 'react';
import logo from '../img/footerLogo.png';
import '../styles/components/footer.scss';

import {FooterContent} from './footer/FooterContent';
import {FooterList} from "./footer/FooterList";


class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-content--logo">
                        <img src={logo} alt="logo image"/>
                    </div>
                    <FooterContent/>
                    <FooterList/>
                    <div className="footer-content--list">
                        2019 Company NonName. Все права защищены
                    </div>
                </div>
            </div>
        );
    }
}

export default footer;