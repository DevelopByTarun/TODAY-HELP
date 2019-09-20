import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from '../home/home';
import { AboutUs } from '../aboutUs/aboutUs';
import { HomeContact } from '../contactUs/homeContact/homeContact';
import { OfficeContact } from '../contactUs/officeContact/officeContact';
import { FinalReport } from '../report/finalReport';
import { User } from '../user/user';
import { Login } from '../user/login/login';
import { Register } from '../user/register/register';

export const SpaRoute = (props)=> {

    return(
<div>
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about/:description" exact component={AboutUs}/>
        <Route path="/homeContact/:homeAddr" exact component={HomeContact}/>
        <Route path="/officeContact/:officeAddr" exact component={OfficeContact}/>
        <Route path="/report" exact component={FinalReport}/> {/* in FinalReport we send query parameter through nav link */}
        <Route path="/user/:log/:reg" exact component={User}/>
        <Switch>
            <Route path="/user/login" exact component={Login}/>
            <Route path="/user/register/:name/:email/:mobileNo/:addr" exact component={Register}/>
        </Switch>
        <Redirect exact to="/"/>
    </Switch>
</div>
    );
}