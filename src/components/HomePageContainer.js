import React, {Component} from 'react';
import img1 from '../img/Artboard2.jpg';
import img2 from '../img/Artboard5.jpg';
import img3 from '../img/Artboard6.jpg';
import img4 from '../img/Artboard10.jpg';
import '../styles/components/HomePageContainer.scss';

class HomePageContainer extends Component {
    render() {
        return (
            <div className="container-component">
                <div className="container-component-block">
                    <img src={img1} alt="image component 1"/>
                </div>

                <div className="container-component-block">
                    <img src={img2} alt="image component 2"/>
                </div>

                <div className="container-component-block">
                    <img src={img3} alt="image component 3"/>
                </div>

                <div className="container-component-block">
                    <img src={img4} alt="image component 4"/>
                </div>
            </div>
        );
    }
}

export default HomePageContainer;