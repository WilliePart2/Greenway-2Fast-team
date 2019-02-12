import React from 'react';

let pos = 0;

export class LeftArrow extends React.Component {
    goToPrevSlide() {
        let listItems = document.getElementById('carousel').querySelectorAll('img');

        if (pos >= listItems.length - 1) {
            listItems.item(pos).style.display = 'none';
            pos = 0;
        }
        else
            pos++;

        if (listItems.item(pos - 1))
            listItems.item(pos - 1).style.display = 'none';
        listItems.item(pos).style.display = 'flex';
    }

    render() {
        return (
            <button className="arrow-left--prev" content="<" onClick={this.goToPrevSlide}>
                Previous
            </button>
        );
    }
}

