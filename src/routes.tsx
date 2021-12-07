import * as React from 'react';
import { inject } from "mobx-react";
import Result from './views/Result';
import {
    Route,
    Routes
} from "react-router-dom";
import Home from './views/Home';
import { IncomeStore } from './stores/IncomeStore';

const routes = {
    '/': 'Home',
    '/result': 'Result'
}
export default routes;

@inject("IncomeStore")
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
