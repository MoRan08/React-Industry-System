import React, { Component } from 'react';

import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import App from '../App';

import SiderCustom from '../components/Home/SiderCustom';

export default class CRouter extends Component {
   
    render(){
        return (
            <Router history={hashHistory}>
                <Route path={'/' } components={SiderCustom}>
                    <IndexRedirect to="/app/dashboard/index" />
                    <Route path={'app'} component={App}>
                        <Route path={'form'}>
                            <Route path={'basicform'} components={SiderCustom}></Route>
                        </Route>
                       
                    </Route>
                    
                </Route>
            </Router>
        )
    }
}