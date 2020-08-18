import React from 'react';
import './MenuItems.sass'
import MainLandHeader from "../MainLandHeader/MainLandHeader";
import Input from "../UI/Input/Input";
import drink from '../../IMG/drink.png'
import Button from "../UI/Button/Button";

const MenuItems = props => {

    return (
        <div className={'MenuItems'}>
            <MainLandHeader/>
            <img src={drink} alt=""/>
            <div className="topBlock">
                <div className="categories">
                    <ul>
                        <li>Піца</li>
                        <li>ГАРЯЧІ СТРАВИ</li>
                        <li>НАПОЇ</li>
                        <li>ДЕСЕРТИ</li>
                        <li>САЛАТИ</li>
                        <li>ІНШЕ</li>
                    </ul>
                </div>
                <div className="search">
                    <Input className="defaultInput searchInput" type="search" placeholder={'Search'}/>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.71299 9.99745C6.8493 9.99745 7.93908 9.54606 8.74257 8.74256C9.54606 7.93907 9.99746 6.8493 9.99746 5.71299C9.99746 4.57667 9.54606 3.4869 8.74257 2.68341C7.93908 1.87991 6.8493 1.42852 5.71299 1.42852C4.57668 1.42852 3.4869 1.87991 2.68341 2.68341C1.87992 3.4869 1.42852 4.57667 1.42852 5.71299C1.42852 6.8493 1.87992 7.93907 2.68341 8.74256C3.4869 9.54606 4.57668 9.99745 5.71299 9.99745ZM10.226 9.21625L12.7824 11.7727C12.8505 11.8386 12.9049 11.9174 12.9422 12.0046C12.9796 12.0917 12.9992 12.1854 13 12.2802C13.0007 12.375 12.9826 12.4691 12.9466 12.5568C12.9107 12.6445 12.8576 12.7242 12.7905 12.7912C12.7234 12.8582 12.6436 12.9112 12.5559 12.947C12.4681 12.9829 12.374 13.0009 12.2792 13C12.1844 12.9991 12.0907 12.9793 12.0036 12.9418C11.9165 12.9043 11.8378 12.8499 11.7719 12.7816L9.21555 10.2252C8.06764 11.1163 6.62329 11.5364 5.17654 11.4C3.72979 11.2637 2.38938 10.5811 1.4282 9.49122C0.467007 8.40135 -0.0427105 6.98615 0.00280563 5.5337C0.0483218 4.08125 0.64565 2.70073 1.67319 1.67319C2.70074 0.64565 4.08125 0.0483217 5.5337 0.00280563C6.98615 -0.0427105 8.40136 0.467007 9.49122 1.42819C10.5811 2.38938 11.2637 3.72979 11.4001 5.17654C11.5364 6.62329 11.1163 8.06763 10.2253 9.21554L10.226 9.21625Z"
                            fill="white"/>
                    </svg>
                </div>
            </div>
            <div className="itemContainer">
                {
                    props?.data
                        ? props.data.productItem.map((e, key) => {
                            return (
                                <div key={key} className="items">
                                    <img src={require(`../../IMG/Products/${e.image}`)}
                                         alt="Image will be here"/>
                                    <div className="itemsText">
                                        <h2>{e.name}</h2>
                                        <p>{e.description}</p>
                                        <div className={'cost'}>
                                            <div className="price">{e.price}</div>
                                            <div>
                                                <Button className={'defaultBtn addToCardBtn'} value={'add to card'}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : null
                }
            </div>
        </div>
    );
};

export default MenuItems;