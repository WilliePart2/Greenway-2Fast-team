import React, {Component} from 'react';
import logo from '../img/logo.png';
import '../styles/components/HomePage.scss';

class HomePage extends Component {
    render() {
        return (
            <div className="top-block">
                <header className="menu-navigation">

                    <div className="menu-navigation-links">
                        <a className="menu-navigation-links menu-navigation-links-logo" href="">
                            <img className="logo-image" src={logo} alt="logo-image"/>
                        </a>
                        <a className="link-menu-text" href="">
                            Возможности
                        </a>
                        <a className="link-menu-text" href="">
                            Продукция
                        </a>
                        <a className="link-menu-text" href="">
                            Команда
                        </a>

                        <a className="link-menu-text link-menu-text-login" href="">
                            Авторизация
                        </a>
                    </div>
                </header>

                <div className="container-content" id="container">
                </div>

                <div id="footer"></div>
            </div>
        );

    }
}

export default HomePage;