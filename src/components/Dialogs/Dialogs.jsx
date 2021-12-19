import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({dialogsPage, sendMessage, updateNewMessageBody}) => {

    let dialogsElements = dialogsPage.dialogs.map((d, index) => <DialogItem name={d.name} id={d.id} key={index}/>);
    let messagesElements = dialogsPage.messages.map((m, index) => <Message message={m.message} key={index}/>);
    let newMessageBodyText = dialogsPage.newMessageBody

    let onSendMessage = () => {
        sendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value
        updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBodyText}
                            onChange={onNewMessageChange}
                            placeholder="enter your name"/>
                    </div>
                    <div>
                        <button onClick={onSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;