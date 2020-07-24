import React, {useState} from 'react';
import './SocialLinksForm.sass'
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const SocialLinksForm = () => {
    return (
        <div className={'SocialLinksForm'}>
            <legend className={'NavigationTopic'}>SOCIAL LINKS FORM</legend>
            <form className={'addForm'}>
                <Input type="file" className={'fileInput'}/>
                <Input type="text" className={'defaultInput'} placeholder={'Link icon'}/>
            </form>
            <Button className={'defaultBtn'}
                    value={'Submit'}
            />
        </div>
    );
};

export default SocialLinksForm;