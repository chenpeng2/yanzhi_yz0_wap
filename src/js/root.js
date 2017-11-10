import React from 'react'
import ReactDOM from 'react-dom'
import Index from './components/index'
import FuJin from './components/fujin'
import XieHou from './components/xiehou'
// import PiaoXuan from "./components/piaoxuan";
// import HuoDong from "./components/huodong";
import Dynamic from './components/dynamic'
import VideoPlay from './components/videoplay'
import VideoPlay2 from './components/videoplay2'
import { Route, Router} from 'react-router'
import hashHistory from 'react-router/lib/hashHistory'
import IndexRoute from 'react-router/lib/IndexRoute'
import Vote from './components/piaoxuan/Vote'
// import "antd/dist/antd.css";
export default class Root extends React.Component {
    render() {
        return (
            <div>
                <Router history={hashHistory}>
                    <Route path="/" component={Index}></Route>
                    <Route path="/fujin" component={FuJin}></Route>
                    <Route path="/xiehou" component={XieHou}></Route>
                    <Route path="/piaoxuan">
                        <IndexRoute component={Vote}/>
                        <Route path="/piaoxuan/:id" component={Vote}/>
                    </Route>
                    {/*<Route path="/huodong" component={HuoDong}></Route>*/}
                    <Route path="/dymanic" component={Dynamic}></Route>
                    <Route path="/videoplay" component={VideoPlay}></Route>
                    <Route path="/otherplay" component={VideoPlay2}></Route>
                </Router>
            </div>
        )
    };
}
ReactDOM.render(
    <Root/>, document.getElementById('mainContainer'))
