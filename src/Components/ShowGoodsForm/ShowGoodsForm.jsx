import React from "react";
import './ShowGoodsForm.sass'
import photo_cezar from '../../IMG/photo_cezar.jpg'
import photo_soup from '../../IMG/photo_soup.jpg'
import photoLasso from '../../IMG/photoLasso.jpg'
import Input from "../UI/Input/Input";

const ShowGoodsForm = props => {

    const ShowGoodsTableHeaderArray = [
        {
            nameImage: 'Image',
            name: 'Name',
            nameCategory: 'Category',
            Price: 'Price',
            Description: 'Description',
            Ed: 'Ed',
            Del: 'Del',
        }
    ];
    const clickDeleteShowGoodsButton = e => {
        let newDataShowGoods = []
        // eslint-disable-next-line array-callback-return
        props.data.showGoods.map( ShGoods => {
            if (
                (ShGoods.Name !== e.Name)
                // && (ShGoods.Category !== element.Category) && (ShGoods.Price !== element.Price) && (ShGoods.description !== element.description)
            ) {
                newDataShowGoods.push(ShGoods)
                console.log(e.Name)
            }
        });
        props.DBSetter('/showGoods', newDataShowGoods)
    };

    return (
        <div className={'ShowGoodsForm'}>
            <legend className={'NavigationTopic'}>Show goods form</legend>
            <div className="showGoodsTable">
                {
                    ShowGoodsTableHeaderArray.map((H, key) => {
                            return (
                                <div key={key} className="showGoodsTableHeader">
                                    <div className={'headerDiv'}>{H.nameImage}</div>
                                    <div className={'headerDiv'}>{H.name}</div>
                                    <div className={'headerDiv'}>{H.nameCategory}</div>
                                    <div className={'headerDiv'}>{H.Price}</div>
                                    <div className={'headerDiv'}>{H.Description}</div>
                                    <div className={'headerItemDiv'}>{H.Ed}</div>
                                    <div className={'headerItemDiv'}>{H.Del}</div>
                                </div>
                            )
                        }
                    )
                }
                {
                    props?.data
                        ?
                        props.data.showGoods.map((e, key) => {
                            return (
                                <div key={key} className="showGoodsTableBody">
                                    <div className={'bodyDiv'}>
                                        <img src={e.Image} alt={e.Image}/>
                                        {
                                            console.log(e.Image)
                                        }
                                        {/*<img src={photo_cezar} alt="image will be here"/>*/}
                                        {/*Image will be here*/}
                                        <Input
                                            type="file"
                                            name='productImage'
                                        />
                                    </div>
                                    <div className={'bodyDiv'}>
                                        {e.Name}
                                        <Input
                                            type="text"
                                            placeholder={'Цезар'}
                                            name="productName"
                                            // onChange={ e => editProductName(e)}
                                        />
                                    </div>
                                    <div className={'bodyDiv'}>
                                        {e.Category}
                                        <Input
                                            name={'productCategory'}
                                            type="text"
                                            placeholder={'Салати'}
                                            // onChange={ e => editProductCategory(e)}
                                        />
                                    </div>
                                    <div className={'bodyDiv'}>
                                        {e.Price}
                                        <Input
                                            type="text"
                                            placeholder={'115.95'}
                                            name={'productPrice'}
                                            // onChange={ e => editProductPrice(e)}
                                        />
                                    </div>
                                    <div className={'bodyDiv'}>
                                        {e.description}
                                        <Input
                                            type="text"
                                            placeholder={'Томатний соус, моцарела, куряче філе, панчета, листя салату, рукола, соус цезар, пармезан'}
                                            name={'productDescription'}
                                            // onChange={ e => editProductDescription(e)}
                                        />
                                    </div>
                                    {
                                        <div className={'changesEL'}>
                                            <button>
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
                                        &&
                                        <div className={'buttonCheck'}>
                                            <button>
                                                <svg width="15" height="15" viewBox="0 0 25 25"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M16.9594 9.60312C17.0321 9.67569 17.0899 9.7619 17.1292 9.85681C17.1686 9.95173 17.1889 10.0535 17.1889 10.1562C17.1889 10.259 17.1686 10.3608 17.1292 10.4557C17.0899 10.5506 17.0321 10.6368 16.9594 10.7094L12.2719 15.3969C12.1993 15.4696 12.1131 15.5273 12.0182 15.5667C11.9233 15.6061 11.8215 15.6264 11.7188 15.6264C11.616 15.6264 11.5142 15.6061 11.4193 15.5667C11.3244 15.5273 11.2382 15.4696 11.1656 15.3969L8.82189 13.0531C8.74925 12.9805 8.69163 12.8942 8.65232 12.7993C8.61301 12.7044 8.59277 12.6027 8.59277 12.5C8.59277 12.3973 8.61301 12.2955 8.65232 12.2006C8.69163 12.1057 8.74925 12.0195 8.82189 11.9469C8.89452 11.8742 8.98076 11.8166 9.07566 11.7773C9.17057 11.738 9.27229 11.7178 9.37501 11.7178C9.47774 11.7178 9.57945 11.738 9.67436 11.7773C9.76927 11.8166 9.8555 11.8742 9.92814 11.9469L11.7188 13.7391L15.8531 9.60312C15.9257 9.53036 16.0119 9.47264 16.1068 9.43325C16.2017 9.39387 16.3035 9.3736 16.4063 9.3736C16.509 9.3736 16.6108 9.39387 16.7057 9.43325C16.8006 9.47264 16.8868 9.53036 16.9594 9.60312V9.60312Z"
                                                          fill="white"/>
                                                    <path fillRule="evenodd" clipRule="evenodd"
                                                          d="M6.25 1.5625H18.75C19.5788 1.5625 20.3737 1.89174 20.9597 2.47779C21.5458 3.06384 21.875 3.8587 21.875 4.6875V20.3125C21.875 21.1413 21.5458 21.9362 20.9597 22.5222C20.3737 23.1083 19.5788 23.4375 18.75 23.4375H6.25C5.4212 23.4375 4.62634 23.1083 4.04029 22.5222C3.45424 21.9362 3.125 21.1413 3.125 20.3125V4.6875C3.125 3.8587 3.45424 3.06384 4.04029 2.47779C4.62634 1.89174 5.4212 1.5625 6.25 1.5625V1.5625ZM6.25 3.125C5.8356 3.125 5.43817 3.28962 5.14515 3.58265C4.85212 3.87567 4.6875 4.2731 4.6875 4.6875V20.3125C4.6875 20.7269 4.85212 21.1243 5.14515 21.4174C5.43817 21.7104 5.8356 21.875 6.25 21.875H18.75C19.1644 21.875 19.5618 21.7104 19.8549 21.4174C20.1479 21.1243 20.3125 20.7269 20.3125 20.3125V4.6875C20.3125 4.2731 20.1479 3.87567 19.8549 3.58265C19.5618 3.28962 19.1644 3.125 18.75 3.125H6.25Z"
                                                          fill="white"/>
                                                </svg>
                                            </button>
                                        </div>
                                    }
                                    {
                                            <button name={e.name} className={'changesEL'} onClick={ () => clickDeleteShowGoodsButton(e)}>
                                                <svg width="15" height="15" viewBox="0 0 25 25"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M7.55208 2.25H7.29167C7.4349 2.25 7.55208 2.1375 7.55208 2V2.25H17.4479V2C17.4479 2.1375 17.5651 2.25 17.7083 2.25H17.4479V4.5H19.7917V2C19.7917 0.896875 18.8574 0 17.7083 0H7.29167C6.14258 0 5.20833 0.896875 5.20833 2V4.5H7.55208V2.25ZM23.9583 4.5H1.04167C0.465495 4.5 0 4.94687 0 5.5V6.5C0 6.6375 0.117187 6.75 0.260417 6.75H2.22656L3.0306 23.0938C3.08268 24.1594 4.00065 25 5.11068 25H19.8893C21.0026 25 21.9173 24.1625 21.9694 23.0938L22.7734 6.75H24.7396C24.8828 6.75 25 6.6375 25 6.5V5.5C25 4.94687 24.5345 4.5 23.9583 4.5ZM19.6387 22.75H5.36133L4.57357 6.75H20.4264L19.6387 22.75Z"
                                                        fill="white"/>
                                                </svg>
                                            </button>
                                    }
                                </div>
                            )
                        }) : null
                }
            </div>
        </div>
    );
};

export default ShowGoodsForm;