import React from 'react'
import {Tabs} from 'antd'
import User from '../dynamic/user'
import Comprehensive from '../dynamic/comprehensive'
// import 'antd/dist/antd.css';
const TabPane = Tabs.TabPane
export default class SearchTab extends React.Component {
    constructor() {
        super()
        this.state = {
            datasuser: '',
            datacompre: '',
            tovideodata: ''
        }
    }

    callback(key) {
        this.props.keyfun(key)
    }

    componentWillMount() {
        this.setState({datasuser: this.props.datasuser})
        this.setState({datacompre: this.props.datascompre})
        this.setState({tovideodata: this.props.tovideodata})
    };

    componentWillReceiveProps(nextProps) {
        this.setState({datasuser: nextProps.datasuser})
        this.setState({datacompre: nextProps.datascompre})
        this.setState({tovideodata: nextProps.tovideodata})
    }

    render() {
        const searchtab = {
            backgroundColor: '#fff'
        }
        const users = this.state.datasuser
            ? <User userdatas={this.state.datasuser.data} videodata={this.state.tovideodata}/>
            : ''
        const comprehensive = this.state.datacompre
            ? <Comprehensive userdatas={this.state.datacompre.data} videodata={this.state.tovideodata}/>
            : ''
        return (
            <div style={searchtab}>
                <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)} class="dynamic_tabs">
                    <TabPane tab="用户" key="1">{users}</TabPane>
                    <TabPane tab="综合" key="2">{comprehensive}</TabPane>
                </Tabs>
            </div>
        )
    };
}
