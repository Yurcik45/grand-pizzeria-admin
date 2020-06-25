import React from 'react';
import './AdminPanel.sass'
import AdminAuth from "../AdminAuth/AdminAuth";
import {Route} from "react-router-dom";
import AdminNavigation from "../../Components/AdminNavigation/AdminNavigation";
import AddGoodForm from "../../Components/AddGoodForm/AddGoodForm";

const AdminPanel = () => {
    return (
        <div className="MainAdminPanel">
            {/*<h1>ADMIN PANEL PAGE</h1>*/}
                {
                    window.location.pathname !== '/AdminPanel/AdminAuth'
                        ? <AdminNavigation/>
                        : null
                }
            <Route exect path='/AdminPanel/AdminAuth'>
                <AdminAuth/>
            </Route>
            <Route exect path='/AdminPanel/AddGood'>
                <AddGoodForm/>
            </Route>
        </div>
    );
};

export default AdminPanel;