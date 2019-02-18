import React from 'react';
import {Button} from "../button";

export class InformationBlockItem extends React.Component {
    render() {
        let returned_string = '';

        if (this.props.content.btn_bottom) {

            returned_string =
                <div className="proposal-item">
                    <div className="information-block-button--content">
                        <button className="information-block--button">{this.props.content.btn_bottom}</button>
                    </div>

                </div>;
        } else {
            returned_string =
                <div className="proposal-item">
                    <div className="information-block-label--top white">
                        {this.props.content.top_content}
                        <div className="border"></div>
                    </div>
                    <div className="information-block-label">
                        <p className="white">-{this.props.content.p1}</p>
                        <p className="white">-{this.props.content.p2}</p>
                        <p className="white">-{this.props.content.p3}</p>
                        <div className="border"></div>
                    </div>
                    <div className="information-block-label--bottom white">
                        {this.props.content.bottom_content}

                    </div>
                </div>;
        }

        return (
            returned_string
        );
    }

}
