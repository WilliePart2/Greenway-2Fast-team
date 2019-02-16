import React from 'react';
import {getClasses} from '../../libs/utils';

export class TextBlock extends React.Component {
    get classList() {
        let classes = {
            'text-block': true,
            'center': this.props.center,
            'nowrap': this.props.nowrap,
            'attractive': this.props.attractive,
            'bold': this.props.bold
        };

        return getClasses(classes);
    }

    get styles() {
        let styles = {};
        if (this.props.size) {
            styles.fontSize = this.props.size;
        }

        return styles;
    }

    get contentStyles() {
        let contentStyles = {};
        if (this.props.maxWidth) {
            contentStyles.maxWidth = `${this.props.maxWidth}px`;
        }

        return contentStyles;
    }

    render() {
        return (
            <div className={this.classList} style={this.styles}>
                <div className="text-block-content" style={this.contentStyles}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
