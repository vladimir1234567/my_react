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
    
let DialogsItems = props.DialogsData.map( dialitem => 
                    <DialogItem name={dialitem.name} id={dialitem.id} /> );

    let MessageItem = props.MessagesData.map( messagitem  => 
                        <Message message = {messagitem.message} id={messagitem.id} /> );
debugger;
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