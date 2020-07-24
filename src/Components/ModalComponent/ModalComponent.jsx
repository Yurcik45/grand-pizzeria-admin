import React from 'react';
import './ModalComponent.sass'
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const ModalComponent = props => {
    return (
        <div
            className={props.isModalOpen ? 'AddUserIdFormInput AddUserIdFormInputActive' : 'AddUserIdFormInput'}
        >
            <legend>Add Telegram User Form</legend>
            <Input
                className={'defaultInput'}
                type="text"
                placeholder={'Add Chat ID'}
                name={'name'}
                onChange={e => props.changeUserId(e)}
            />
            <div className={'buttonsDiv'}>
                <Button
                    className={'defaultBtn'}
                    type={'button'}
                    value={'Cancel'}
                    onClick={() => props.isModalOpenHandler(false)}
                />
                <Button
                    className={'defaultBtn'}
                    type={'submit'}
                    value={'Add'}
                    onClick={() => props.isModalOpenHandler(false)}
                />
            </div>
        </div>
    );
};

export default ModalComponent;