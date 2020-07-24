import React, {useState} from 'react';
import './OrderStatisticsForm.sass'
import Button from "../UI/Button/Button";

const OrderStatisticsForm = () => {

    const [openModal, openModalHandler] = useState(false);
    const [closeModal, closeModalHandler] = useState(false);
    const [addOpacity, addOpacityHandler] = useState(false);
    const [delOpacity, delOpacityHandler] = useState(false);
    const openModalFunction = () => {
        openModalHandler(true)
        addOpacityHandler(true)
    };
    const closeModalFunction = () => {
        closeModalHandler(true)
        delOpacityHandler(true)
    };
    const InputForm = () => {
        return (
            <form
                className={`${openModal === true ? closeModal === true ? 'classBefore' : 'classBefore classAfter' : 'classBefore'}`}
            >
                <div>
                    <div className="mainModal" id="mainModal">
                        <div className="titleModal">
                            <span>First Modal</span>
                            <button
                                id="buttonClose"
                                className={'defaultBtn'}
                                onClick={closeModalFunction}
                            >Close</button>
                        </div>
                        <div className="bodyModal">
                          <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quis amet architecto
                            cupiditate qui adipisci est consequatur pariatur aliquid a, tempora esse possimus magnam
                            vero numquam doloremque nulla vel eius praesentium deleniti recusandae. Expedita sint
                            necessitatibus, neque sed aperiam dicta voluptatem hic, architecto ab sunt dolorum aspernatur
                            delectus ex rem.
                          </span>
                        </div>
                    </div>
                </div>
            </form>
        )
    };

    return (
        <div>
            <button
                className={'defaultBtn'}
                onClick={openModalFunction}
            >
                Open Modal
            </button>
            <InputForm/>
            <div
                className={`${addOpacity === true ? delOpacity === true ? 'opacityDiv' : 'opacityDiv opacityDivAfter' : 'opacityDiv'}`}
            >
            </div>
        </div>
    );
};

export default OrderStatisticsForm;