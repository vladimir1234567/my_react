import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div className={s.message}>
        {props.message}
    </div>
}
const Dialogs = (props) => {
    let DialogsData = [
        {name: 'Dimych', id: 1},
        {name: 'Andrey', id: 2},
        {name: 'Sveta', id: 3},
        {name: 'Sasha', id: 4},
        {name: 'Valera', id: 5}
    ];

let DialogsItems = DialogsData.map( dialitem => 
                    <DialogItem name={dialitem.name} id={dialitem.id} /> );

    let MessagesData = [
        {message: 'hi', id: 1},
        {message: 'hello!', id: 2},
        {message: 'o`key!', id: 3},
        {message: 'Let`s go', id: 4},
        {message: 'Yo-ho!', id: 5}
    ];

    let MessageItem = MessagesData.map( messagitem  => 
                        <Message message = {messagitem.message} id={messagitem.id} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogsItems}
            </div>
            <div className={s.messages}>
                {MessageItem}
                
            </div>
        </div>
   
    );
}

export default Dialogs;