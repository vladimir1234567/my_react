import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import {addMessageActionCreator, updateMessageActionCreator} from '../../Redux/State';

const DialogItem = (props) => {
    debugger;
    
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
    
    

    // let newMessEl = React.createRef();
    let newmes = props.newmes;
    

    let addMessage = () => {
        // let text = newMessEl.current.value;
        props.dispatch(addMessageActionCreator());
    }

    let updateMessage = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageActionCreator(text));
    }
    
    let DialogsItems = props.DialogsData.map( dialitem => 
                    <DialogItem name={dialitem.name} id={dialitem.id} /> );

    let MessageItem = props.MessagesData.map( messagitem  => 
                        <Message message = {messagitem.message} id={messagitem.id} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogsItems}
            </div>
            <div className={s.messages}>
                {MessageItem}
            </div>
            <div>
                <textarea  
                value={newmes} 
                onChange={updateMessage} 
                placeholder='Enter your message' />
            </div>
            <div><button onClick={ addMessage } >addMessage</button></div>
        </div>
    );
}

export default Dialogs;