import React, {Component} from 'react';
import logo from '../../img/logo.png';
import './footer.scss';


class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <img src={logo} alt="logo image"/>
                </div>
            </div>
        );
    }
}

export default footer;