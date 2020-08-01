import React from 'react';
import './ShowGoodsTable.sass'
import Input from "../UI/Input/Input";

const ShowGoodsTable = props => {
    return (
        <div key={props.key} className="showGoodsTableBody">
            <div className={'bodyDiv'}>
                <img src={props.e.Image} alt={props.e.Image}/>
            </div>
            <div className={'bodyDiv'}>
                {props.e.Name}
            </div>
            <div className={'bodyDiv'}>
                {props.e.Category}
            </div>
            <div className={'bodyDiv'}>
                {props.e.Price}
            </div>
            <div className={'bodyDiv'}>
                {props.e.description}
            </div>
            {
                <div className={'buttonCheck'}>
                    <button onClick={() => props.isSHGModalOpenHandler({status:true,item : props.e})}>
                        <svg width="17" height="17" viewBox="0 0 25 25"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.29169 17.7219L11.8886 17.7062L21.9219 7.76873C22.3156 7.37498 22.5323 6.85206 22.5323 6.29581C22.5323 5.73956 22.3156 5.21665 21.9219 4.8229L20.2698 3.17081C19.4823 2.38331 18.1084 2.38748 17.3271 3.16769L7.29169 13.1073V17.7219V17.7219ZM18.7969 4.64373L20.4521 6.29269L18.7886 7.9406L17.1365 6.28956L18.7969 4.64373ZM9.37502 13.976L15.6563 7.75415L17.3084 9.40623L11.0281 15.626L9.37502 15.6312V13.976Z"
                                fill="white"/>
                            <path
                                d="M5.20833 21.875H19.7917C20.9406 21.875 21.875 20.9406 21.875 19.7917V10.7625L19.7917 12.8458V19.7917H8.49792C8.47083 19.7917 8.44271 19.8021 8.41563 19.8021C8.38125 19.8021 8.34687 19.7927 8.31146 19.7917H5.20833V5.20833H12.3406L14.424 3.125H5.20833C4.05937 3.125 3.125 4.05937 3.125 5.20833V19.7917C3.125 20.9406 4.05937 21.875 5.20833 21.875Z"
                                fill="white"/>
                        </svg>
                    </button>
                </div>
            }
            {
                <div name={props.e.name} className={'buttonCheck'} onClick={ () => props.clickDeleteShowGoodsButton(props.e)}>
                    <button>
                        <svg width="15" height="15" viewBox="0 0 25 25"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.55208 2.25H7.29167C7.4349 2.25 7.55208 2.1375 7.55208 2V2.25H17.4479V2C17.4479 2.1375 17.5651 2.25 17.7083 2.25H17.4479V4.5H19.7917V2C19.7917 0.896875 18.8574 0 17.7083 0H7.29167C6.14258 0 5.20833 0.896875 5.20833 2V4.5H7.55208V2.25ZM23.9583 4.5H1.04167C0.465495 4.5 0 4.94687 0 5.5V6.5C0 6.6375 0.117187 6.75 0.260417 6.75H2.22656L3.0306 23.0938C3.08268 24.1594 4.00065 25 5.11068 25H19.8893C21.0026 25 21.9173 24.1625 21.9694 23.0938L22.7734 6.75H24.7396C24.8828 6.75 25 6.6375 25 6.5V5.5C25 4.94687 24.5345 4.5 23.9583 4.5ZM19.6387 22.75H5.36133L4.57357 6.75H20.4264L19.6387 22.75Z"
                                fill="white"/>
                        </svg>
                    </button>
                </div>
            }
        </div>
    );
};

export default ShowGoodsTable;