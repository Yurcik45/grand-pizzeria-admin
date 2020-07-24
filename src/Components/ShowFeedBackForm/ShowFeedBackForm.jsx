import React, {useState} from 'react';
import './ShowFeedBackForm.sass'
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const ShowFeedBackForm = () => {
    const[showFeedback, setShowFeedback] = useState(false)
    const[closeFeedback, setCloseFeedback] = useState(false)

    const clickFeedbackButton = () => {
        setShowFeedback(true)
    }
    const clickAddButton = () => {
        let question = window.confirm('Відправити відповідь ?')
        if (question === true) {
            setCloseFeedback(true)
            alert('Відправлено')
        }
    }
    const FeedbackComponent = () => {
        return (
            <div className={'feedbackComponent'}>
                <Input className={'defaultInput FeedbackComponentInput'}
                       type="text"
                       placeholder={'Send sms to user'}
                       name={'name'}
                />
                <Button
                    onClick={clickAddButton}
                    className={'defaultBtn feedbackComponentAddBtn'}
                    type={'text'}
                    value={'Send'}
                />
            </div>
        )
    }
    return (
        <div className={'ShowFeedBackForm'}>
            <legend className={'NavigationTopic'}>SHOW FEED BACK FORM</legend>
            <div className={'mainForm'}>
                <div className={'textDiv'}>
                    <text>А.Совкіна</text>
                    More textmore textmore textmore textmore textmore textmore textmore textmore textmore textmore
                    textmore textmore textmore textmore textmore textmore textmore textmore textmore textmore textmore
                    textmore textmore text.
                </div>
                <div className={'eventsButton'}>
                    <Button className={'defaultBtn ShowFeedBackForm'}
                            onClick={clickFeedbackButton}
                            value={'Відповісти'}
                    />
                    <Button className={'defaultBtn ShowFeedBackForm'}
                            value={'Прийняти'}
                    />
                    <Button className={'defaultBtn ShowFeedBackForm'}
                            value={'Відхилити'}
                    />
                </div>
            </div>
            {
                showFeedback ? closeFeedback ? null : <FeedbackComponent/> : null
            }
        </div>
    );
};

export default ShowFeedBackForm;