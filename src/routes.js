import React from 'react';
import { Route, IndexRoute } from 'react-router';

import requireAuth from './utils/requireAuth';

import App from './components/App';
import Main from './components/Main';
import Profile from './components/Profile';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import ItemPage from './components/ItemPage';
import MyItems from './components/MyItems';
import Categories from './components/Categories';
import ErrorPage from './components/ErrorPage';
import Register from './components/Register';
import SpeCategory from './components/SpeCategory';
import Admin from './components/Admin';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="item/:id" component={ItemPage} />
    <Route path="profile" component={requireAuth(Profile)} />
    <Route path="login" component={Login} />
    <Route exact path="admin" component={Admin} />
    <Route path="myItems" component={requireAuth(MyItems)} />
    <Route path="search" component={Categories} />
    <Route path="search/:category" component={SpeCategory} />
    <Route path="register" component={Register} />
    <Route path="user/:id" component={UserProfile} />
    <Route path="*" component={ErrorPage} />
  </Route>
);
