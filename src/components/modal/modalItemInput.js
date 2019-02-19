import React from 'react';

export class ModalItemInput extends React.Component{
    render(){
        return(
            <div className="modal-form-item--input">
                <input type={this.props.type} value={this.props.value} onChange={this.props.onchange}/>
            </div>
        );
    }
}