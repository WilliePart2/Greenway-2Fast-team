import React from 'react';

let pos = 0;

export class RightArrow extends React.Component {

    goToNextSlide() {
        let listItems = document.getElementById('carousel').querySelectorAll('img');

        if (pos <= 0) {
            listItems.item(pos).style.display = 'none';
            pos = listItems.length - 1;
        }
        else
            pos--;

        if (listItems.item(pos + 1))
            listItems.item(pos + 1).style.display = 'none';
        listItems.item(pos).style.display = 'flex';
    }

    render() {
        return (
            <button className="arrow-right--next" content=">" onClick={this.goToNextSlide}>
                Next
            </button>
        );
    }
}
