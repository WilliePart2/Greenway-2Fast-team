import React from 'react';
import {InformationBlockItem} from "./InformationBlockItem";

export class InformationBlock extends React.Component {
    render() {
        let proposals = [
            {
                top_content: "Реальная забота о близких",
                p1: "Вас беспокоит экология планеты? Переходите на уникальные качественные продукты Greenway!",
                p2: "Собственные лаборатории, иследовательский центр и производство",
                p3: "Девять линеек продукции для тех, кто выбрал осознанный экологичный подход к своей жизни",
                bottom_content: "Позаботьтесь о себе и всех, кто Вам дорог!Вместе мы сделаем наш дом чище, а планету - счастливее.",
            },
            {
                btn_bottom: "Узнать подробней"
            },
            {
                btn_bottom: "Присойдениться"
            },
            {
                top_content: "Быстрый старт бизнеса",
                p1: "Много работаете, а денег не хватает? Поздравляем, вы переросли своего работодателя и готовы к большему",
                p2: "Greenway дает простые инструменты для получения большых доходов",
                p3: "Стартовый план и опытный наставник помогут Вам быстро набрать обороты!",
                bottom_content: "Начните сейчас и уже через год Ваша машина и квартира будут круче, чем у бывшего босса!",
            }

        ];
        let count = 0;
        return (
            <div className="proposals-section">
                {proposals.map(content => <InformationBlockItem index={count++}
                                                                content={content}/>)}
            </div>
        );
    }

}