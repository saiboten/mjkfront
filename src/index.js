import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Main } from './components/Main';
import { AdminOverviewContainer } from './components/admin/AdminOverviewContainer';
import { Menu } from './components/menu/Menu';

if(document.getElementById('main')) {
    ReactDOM.render(
        <Main />,
        document.getElementById('main')
    );
}

if(document.getElementById('admin')) {
    ReactDOM.render(
        <AdminOverviewContainer />,
        document.getElementById('admin')
    );
}

if(document.getElementById('menuLoggedIn')) {
    ReactDOM.render(
        <Menu loggedIn="true" />,
        document.getElementById('menuLoggedIn')
    );
}

if(document.getElementById('menuLoggedOut')) {
    ReactDOM.render(
        <Menu loggedIn="false" />,
        document.getElementById('menuLoggedOut')
    );
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
