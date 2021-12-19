const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE"

export const sendMessageCreator = () => (
    {
        type: SEND_MESSAGE
    }
)

export const updateNewMessageBodyCreator = (text) => (
    {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
)

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageBody: ""
}

export const dialogsReducer = (state = initialState, action) => {
    let copyState;
    switch (action.type) {
        case SEND_MESSAGE : {
            let body = state.newMessageBody
            copyState = {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: 6, message: body}]
            }
            return copyState;
        }
        case UPDATE_NEW_MESSAGE_BODY : {
            copyState = {
                ...state,
                newMessageBody: action.body
            }
            return copyState;
        }
        default:
            return state;
    }
}