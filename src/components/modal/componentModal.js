import React from 'react';
import {ModalItem} from "./modalItem";
import {ModalItemInput} from "./modalItemInput";
import {ModalWindow} from "./modalWindow";

export class ComponentModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            FirstName: "",
            LastName: "",
            City: "",
            Email: "",
            PhoneNumber: ""
        };

        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeLast = this.onChangeLast.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeName(e) {
        let value = e.target.value;
        this.setState(
            {
                FirsName: value
            }
        )
    }

    onChangeLast(e) {
        let value = e.target.value;
        this.setState(
            {
                LastName: value
            }
        )
    }

    onChangeCity(e) {
        let value = e.target.value;
        this.setState(
            {
                City: value
            }
        )
    }

    onChangeEmail(e) {
        let value = e.target.value;
        this.setState(
            {
                Email: value
            }
        )
    }

    onChangePhone(e) {
        let value = e.target.value;
        this.setState(
            {
                PhoneNumber: value
            }
        )
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="modal-form--container">
                    <ModalItem>Имя</ModalItem>
                    <ModalItemInput type="text" value="Имя" onChange={this.props.onChangeName}/>
                    <ModalItem>Фамилия</ModalItem>
                    <ModalItemInput type="text" value="Фамилия" onChange={this.props.onChangeLast}/>
                    <ModalItem>Город</ModalItem>
                    <ModalItemInput type="text" value="Город" onChange={this.props.onChangeCity}/>
                    <ModalItem>Эл.почта</ModalItem>
                    <ModalItemInput type="text" value="Эл.почта" onChange={this.props.onChangeEmail}/>
                    <ModalItem>Телефон</ModalItem>
                    <ModalItemInput type="text" value="Телефон" onChange={this.props.onChangePhone}/>
                </div>
                <ModalItemInput type="submit" value="Enter"/>
            </form>
        );
    }
}