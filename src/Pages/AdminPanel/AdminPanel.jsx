import React from 'react';
import './AdminPanel.sass'
import AdminAuth from "../AdminAuth/AdminAuth";
import {Route} from "react-router-dom";
import AdminNavigation from "../../Components/AdminNavigation/AdminNavigation";
import AddGoodForm from "../../Components/AddGoodForm/AddGoodForm";
import AddTelegramUserForm from "../../Components/AddTelegramUserForm/AddTelegramUserForm";
import ShowGoodsForm from "../../Components/ShowGoodsForm/ShowGoodsForm";
import TelephonesForm from "../../Components/TelephonesForm/TelephonesForm";
import UserTellStatisticsForm from "../../Components/UserTellStatisticsForm/UserTellStatisticsForm";
import ShowIventsForm from "../../Components/ShowIventsForm/ShowIventsForm";
import ShowFeedBackForm from "../../Components/ShowFeedBackForm/ShowFeedBackForm";
import OrderStatisticsForm from "../../Components/OrderStatisticsForm/OrderStatisticsForm";
import SocialLinksForm from "../../Components/SocialLinksForm/SocialLinksForm";

const AdminPanel = props => {
    return (
        <div className="MainAdminPanel">
            {
                window.location.pathname !== '/AdminPanel/AdminAuth'
                    ? <AdminNavigation/>
                    : null
            }
            <Route exect path='/AdminPanel/AdminAuth'>
                <AdminAuth/>
            </Route>


            <Route exect path='/AdminPanel/AddGood'>
                <AddGoodForm
                    DBSetter={(path, value) => props.DBSetter(path, value)}
                    data={props.data}
                />
            </Route>
            <Route exect path='/AdminPanel/AddTelegramUser'>
                <AddTelegramUserForm
                    DBSetter={(path, value) => props.DBSetter(path, value)}
                    data={props.data}
                />
            </Route>
            <Route exect path='/AdminPanel/ShowGoods'>
                <ShowGoodsForm
                    DBSetter={(path, value) => props.DBSetter(path, value)}
                    data={props.data}
                />
            </Route>
            <Route exect path='/AdminPanel/ShowFeedBack'>
                <ShowFeedBackForm/>
            </Route>
            <Route exect path='/AdminPanel/ShowIvents'>
                <ShowIventsForm/>
            </Route>
            <Route exect path='/AdminPanel/OrderStatistics'>
                <OrderStatisticsForm/>
            </Route>
            <Route exect path='/AdminPanel/Telephones'>
                <TelephonesForm/>
            </Route>
            <Route exect path='/AdminPanel/SocialLinks'>
                <SocialLinksForm/>
            </Route>
            <Route exect path='/AdminPanel/UserTellStatistics'>
                <UserTellStatisticsForm/>
            </Route>
        </div>
    );
};

export default AdminPanel;