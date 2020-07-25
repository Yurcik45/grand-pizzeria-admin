import React, {useEffect, useState} from 'react';
import './App.sass';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";
import AdminNavigation from "./Components/AdminNavigation/AdminNavigation";
import firebase from "firebase";

function App() {
    const [data, dataHandler] = useState(0)
    const [dbRefresh, dbRefreshHandler] = useState(0)

    useEffect(() => {
        console.log('fetch worked')
        fetch('https://grandepizzeria-d237f.firebaseio.com/.json')
            .then(response => response.json())
            .then(
                json => {
                    dataHandler(json)
                }
            )
        console.log(data)
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
                    </Route>
                    <Route path="/AdminPanel">
                        <AdminPanel
                            DBSetter={(path, value) => DBSetter(path, value)}
                            data={data}
                        />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;