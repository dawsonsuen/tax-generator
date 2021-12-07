import * as React from 'react';
// import { HashRouter, Switch, Route, Redirect, withRouter, RouterProps } from "react-router-dom";
import { observer, Provider, inject } from "mobx-react";
import Result from './views/Result';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import Home from './views/Home';
import { incomeStore, IncomeStore } from './stores/IncomeStore';

const routes = {
    '/': 'Home',
    '/result': 'Result'
}
export default routes;

@inject("IncomeStore")
@observer
export class MainRouter extends React.Component<{ IncomeStore?: IncomeStore },{}>
{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{height:'100%'}}>
                <Routes>
                    <Route path="/" element={<Home location={undefined} navigator={undefined} />} />
                    <Route path="/result" element={<Result />} />
                </Routes>
            </div>
        )
    }
}
