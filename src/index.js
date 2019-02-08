import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import HomePage from './Page/HomePage';
import ContainerContent from './Page/HomePageContainer'
import Footer from './Page/footer/footer';

ReactDOM.render(<HomePage/>, document.getElementById('root'));
ReactDOM.render(<ContainerContent/>, document.getElementById('container'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));