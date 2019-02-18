import React from 'react';
import {Text} from "./Text";

export class FooterContent extends React.Component {
    render() {
        return (
            <div className="footer-content--label">
                <Text>Главная</Text>
                <Text>Авто</Text>
                <Text>Забота о близких и старт бизнеса</Text>
                <Text>О нас</Text>
                <Text>Наши продукты</Text>
                <Text>Присойдениться</Text>

            </div>
        );
    }
}