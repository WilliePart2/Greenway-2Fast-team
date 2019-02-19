import React from 'react';

export class ModalItem {
    render(){
        return(
            <div className="modal-form--item">
                {this.props.children}
            </div>
        );
    }
}