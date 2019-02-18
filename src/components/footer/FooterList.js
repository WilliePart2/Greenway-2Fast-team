import React from 'react';
import {Text} from "./Text";

export class FooterList extends React.Component{
    render(){
        return(
            <div className="footer-content--list">
                <Text>Имя Фамилия</Text>
                <Text>телефон</Text>
                <Text>Електронный адрес</Text>
                <div className="border"></div>
            </div>
        );
    }
}