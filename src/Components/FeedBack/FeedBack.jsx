import React from 'react';
import './FeedBack.sass'
import MainLandHeader from "../MainLandHeader/MainLandHeader";
import Button from "../UI/Button/Button";

const FeedBack = () => {
    return (
        <div className={'FeedBack'}>
            <MainLandHeader/>
            <div className="headerFeedBack">
                <p>Відгуки</p>
                <div className={'feedBackLine'}>
                    <p>Ми були б раді почути Вашу думку</p>
                    <Button className={'pauseButton feedBackButton'} value={'Написати'}/>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;