import React, {useState} from 'react';
import './UserTellStatisticsForm.sass'

const UserTellStatisticsForm = () => {
    const [deleteButton, setDeleteButton] = useState(false);
    const [deleteButton1, setDeleteButton1] = useState(false);
    const DeleteButton = () => {
        return (
            <div className={'deleteButtonDiv'} onClick={clickDeleteButton}>
                <button>
                    <svg width="15" height="15" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.55208 2.25H7.29167C7.4349 2.25 7.55208 2.1375 7.55208 2V2.25H17.4479V2C17.4479 2.1375 17.5651 2.25 17.7083 2.25H17.4479V4.5H19.7917V2C19.7917 0.896875 18.8574 0 17.7083 0H7.29167C6.14258 0 5.20833 0.896875 5.20833 2V4.5H7.55208V2.25ZM23.9583 4.5H1.04167C0.465495 4.5 0 4.94687 0 5.5V6.5C0 6.6375 0.117187 6.75 0.260417 6.75H2.22656L3.0306 23.0938C3.08268 24.1594 4.00065 25 5.11068 25H19.8893C21.0026 25 21.9173 24.1625 21.9694 23.0938L22.7734 6.75H24.7396C24.8828 6.75 25 6.6375 25 6.5V5.5C25 4.94687 24.5345 4.5 23.9583 4.5ZM19.6387 22.75H5.36133L4.57357 6.75H20.4264L19.6387 22.75Z"
                            fill="white"/>
                    </svg>
                </button>
            </div>
        )
    };
    const DeleteButton1 = () => {
        return (
            <div className={'deleteButtonDiv'} onClick={clickDeleteButton1}>
                <button>
                    <svg width="15" height="15" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.55208 2.25H7.29167C7.4349 2.25 7.55208 2.1375 7.55208 2V2.25H17.4479V2C17.4479 2.1375 17.5651 2.25 17.7083 2.25H17.4479V4.5H19.7917V2C19.7917 0.896875 18.8574 0 17.7083 0H7.29167C6.14258 0 5.20833 0.896875 5.20833 2V4.5H7.55208V2.25ZM23.9583 4.5H1.04167C0.465495 4.5 0 4.94687 0 5.5V6.5C0 6.6375 0.117187 6.75 0.260417 6.75H2.22656L3.0306 23.0938C3.08268 24.1594 4.00065 25 5.11068 25H19.8893C21.0026 25 21.9173 24.1625 21.9694 23.0938L22.7734 6.75H24.7396C24.8828 6.75 25 6.6375 25 6.5V5.5C25 4.94687 24.5345 4.5 23.9583 4.5ZM19.6387 22.75H5.36133L4.57357 6.75H20.4264L19.6387 22.75Z"
                            fill="white"/>
                    </svg>
                </button>
            </div>
        )
    };
    const clickDeleteButton = () => {
        const itsQuestion = window.confirm('Ви впевнені?');
        if (itsQuestion === true) {
            setDeleteButton(true)
        }
    };
    const clickDeleteButton1 = () => {
        const itsQuestion1 = window.confirm('Ви впевнені?');
        if (itsQuestion1 === true) {
            setDeleteButton1(true)
        }
    };

    let UserTellLinksDataArray = [
        {
            className: 'DivBody_1' ,
            telephoneNumber: '+380662748865' ,
            countCalls: '22' ,
            wtf: '---'
        },
        {
            className: 'DivBody_1' ,
            telephoneNumber: '+380503659833' ,
            countCalls: '43' ,
            wtf: '---'
        },
        {
            className: 'DivBody_1' ,
            telephoneNumber: '+380666582956' ,
            countCalls: '657' ,
            wtf: '---'
        },
        {
            className: 'DivBody_1' ,
            telephoneNumber: '+380504756397' ,
            countCalls: '34' ,
            wtf: '---'
        },
        {
            className: 'DivBody_1' ,
            telephoneNumber: '+380503658299' ,
            countCalls: '54' ,
            wtf: '---'
        },
    ];

    return (
        <div className={'UserTellStatisticsForm'}>
            <legend className={'NavigationTopic'}>User Tell Statistics</legend>
            <div className="UserTellStatisticsTable">
                <div className="telephonesTableHeader">
                    <div className={'HeaderDiv'}>Telephone number</div>
                    <div className={'HeaderDiv'}>Кількість замовлень</div>
                    <div className={'HeaderDiv'}>---</div>
                    <div className={'delButtonHeaderDiv'}><strong>X</strong></div>
                </div>
                {!deleteButton ?
                    UserTellLinksDataArray.map(k =>
                        <div className="telephonesTableBody">
                            <div className={k.className}>{k.telephoneNumber}</div>
                            <div className={k.className}>{k.countCalls}</div>
                            <div className={k.className}>{k.wtf}</div>
                            <DeleteButton/>
                        </div>
                    )
                    : null
                }
            </div>
        </div>
    );
};

export default UserTellStatisticsForm;

// {!deleteButton1 ?
//     <div className="telephonesTableBody">
//         <div className={'DivBody_2'}>+380552858865</div>
//         <div className={'DivBody_2'}>32</div>
//         <div className={'DivBody_2'}>---</div>
//         <DeleteButton1/>
//     </div>
//     : null
// }
// {!deleteButton ?
//     <div className="telephonesTableBody">
//         <div className={'DivBody_1'}>+380662748865</div>
//         <div className={'DivBody_1'}>22</div>
//         <div className={'DivBody_1'}>---</div>
//         <DeleteButton/>
//     </div>
//     : null
// }
// {!deleteButton1 ?
//     <div className="telephonesTableBody">
//         <div className={'DivBody_2'}>+380552858865</div>
//         <div className={'DivBody_2'}>32</div>
//         <div className={'DivBody_2'}>---</div>
//         <DeleteButton1/>
//     </div>
//     : null
// }