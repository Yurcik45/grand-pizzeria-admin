import React, {useState} from 'react';
import './AddTelegramUserForm.sass'
import '../../firebaseConfig'
import Button from "../UI/Button/Button";
import ModalComponent from "../ModalComponent/ModalComponent";
import ChatId from "../ChatId/ChatId";

const AddTelegramUserForm = props => {
    const [getInputValue] = useState({});
    const [isModalOpen, isModalOpenHandler] = useState(false);

    const addChatIdHandler = () => {
        let newChatId = getInputValue
        let currentIDs = props.data?.chatIDs ? props.data.chatIDs : []
        currentIDs.push(newChatId)
        props.DBSetter('/chatIDs', currentIDs)
    }
    const changeUserId = e => {
        e.preventDefault();
        getInputValue[e.target.name] = e.target.value;
    };
    const submitFormHandler = e => {
        e.preventDefault();
        addChatIdHandler()
        e.target.reset();
    }
    const clickDeleteButton = el => {
        // let currentData = props.data
        // let currentElement = el
        let newData = []
        // eslint-disable-next-line array-callback-return
        props.data.chatIDs.map( chatId => {
            if (chatId.name !== el.name) {
                newData.push(chatId)
            }
        })
        props.DBSetter('/chatIDs', newData)
    }
    return (
        <form className={'AddTelegramUserForm'}
            onSubmit={(e) => submitFormHandler(e)}
        >
            <legend className={'NavigationTopic'}>Add Telegram Users</legend>
            <Button
                className={"defaultBtn Btn"}
                value={'Add Telegram Users'}
                type={'button'}
                onClick={() => isModalOpenHandler(!isModalOpen)}
            />
            {
                props?.data
                    ? props.data.chatIDs.map((e, key) => {
                    return (
                        <ChatId
                            key={key}
                            e={e}
                            clickDeleteButton={(el) => clickDeleteButton(el)}
                        />
                    )
                }) : null
            }
            <div
                className={isModalOpen ? 'opacityAll opacityAllActive' : 'opacityAll'}
            >
                <ModalComponent
                    isModalOpen={isModalOpen}
                    changeUserId={e => changeUserId(e)}
                    isModalOpenHandler={(value) => isModalOpenHandler(value)}
                />
            </div>
        </form>
    );
};
export default AddTelegramUserForm;