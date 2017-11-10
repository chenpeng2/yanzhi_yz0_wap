/**
 * Created by Administrator on 2017-4-25-0025.
 */

import React from 'react'
import {hashHistory, IndexRoute, Route, Router} from 'react-router'
// import routes from './routes.js';
import Vote from './piaoxuan/Vote.js'

export default class PersonIntroduce extends React.Component {
    render() {
        return (
            <div>
                <Router history={hashHistory}>
                    <Route path="/piaoxuan">
                        <IndexRoute component={Vote}/>
                        <Route path="/piaoxuan/:id" component={Vote}/>
                    </Route>
                </Router>
            </div>
        )
    };
}
