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
    ]

    let MessagesData = [
        {messages: 'hi', id: 1},
        {messages: 'hello!', id: 2},
        {messages: 'o`key!', id: 3},
        {messages: 'Let`s go', id: 4},
        {messages: 'Yo-ho!', id: 5}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id} />
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id} />
                <DialogItem name={DialogsData[4].name} id={DialogsData[4].id} />
            </div>
            <div className={s.messages}>
                <Message message={MessagesData[0].messages} />
                <Message message={MessagesData[1].messages} />
                <Message message={MessagesData[2].messages} />
                <Message message={MessagesData[3].messages} />
                <Message message={MessagesData[4].messages} />
                
            </div>
        </div>
   
    );
}

export default Dialogs;