import React, {useEffect, useState} from 'react';
import './App.sass';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import AdminNavigation from "./Components/AdminNavigation/AdminNavigation";
import firebase from "firebase";
import HomePage from "./Components/HomePage/HomePage";
import StartPage from "./Components/StartPage/StartPage";
import MenuItems from "./Components/MenuItems/MenuItems";
import FeedBack from "./Components/FeedBack/FeedBack";
import FoundUs from "./Components/FoundUs/FoundUs";

function App() {
    const [data, dataHandler] = useState(0)
    const [dbRefresh, dbRefreshHandler] = useState(0)

    useEffect(() => {
        // console.log('fetch worked')
        fetch('https://grandepizzeria-d237f.firebaseio.com/.json')
            .then(response => response.json())
            .then(
                json => {
                    dataHandler(json)
                }
            )
        // console.log(data)
    }, [dbRefresh])

    const DBSetter = (path, value) => {
        firebase.database().ref(path).set(value)
            .then(r => dbRefreshHandler(Math.random()));
    };

    // const testDB = () => {
    //     let currentData = data.newValues
    //     let newObject = {
    //         test : '1'
    //     }
    //     currentData.push(newObject)
    //     DBSetter('/newValues', currentData)
    // }
    // console.log(window.location.pathname)

    return (
        <div className="App">
            {
                window.location.pathname.split('/')[1] === '/AdminPanel'
                    ? <AdminNavigation/>
                    : null
            }
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/AdminPanel">
                        <AdminPanel
                            dbRefreshHandler={dbRefreshHandler}
                            DBSetter={(path, value) => DBSetter(path, value)}
                            data={data}
                        />
                    </Route>
                    <Route path="/MenuItems">
                        <MenuItems
                            data={data}
                        />
                    </Route>
                    <Route path="/FeedBack">
                        <FeedBack/>
                    </Route>
                    <Route path="/FoundUs">
                        <FoundUs/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;