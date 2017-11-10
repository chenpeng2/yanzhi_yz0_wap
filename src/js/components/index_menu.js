import React from 'react'
import Popularity from './index_menu/popularity'
import NewPerson from './index_menu/newperson'
import Contribution from './index_menu/contribution'
import NewPersonFilterModel from './index_menu/newpersonfiltermodel'
import {Button, Tabs} from 'antd'

let datas = require('../../data.json')
const TabPane = Tabs.TabPane

export default class ThreeRoot extends React.Component {
    constructor() {
        super()
        this.state = {
            showfilter: false,
            sex: 0,
            star: 0,
            province: 0,
            filterdatas: '',
            arrys: [],
            statuspages: 1,
            timer: ''
        }
    }

    componentDidMount() {
        var _this = this
        this.timer = setInterval(function () {
            if (_this.state.showfilter) {
                $('body').css('overflow', 'hidden')
                $('html').css('overflow', 'hidden')
            } else {
                $('body').css('overflow', '')
                $('html').css('overflow', '')
            }
        })
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    callback(key) {
        this.setState({statuspages: key})
    }

    showfilter() {
        this.setState({showfilter: true})
        // 这里可以请求星座和地区数据，设置成state
    }

    closepop() {
        this.setState({showfilter: false})
        // 清楚原来选中的
        this.setState({sex: 0})
        this.setState({star: 0})
        this.setState({province: 0})
    }

    match(type) {
        if (type.filtertype == 'sex') {
            {
                datas.data.sex.map((item, index) => {
                    if (index == type.index) {
                        this.setState({sex: index})
                    }
                })
            }
        } else if (type.filtertype == 'star') {
            {
                datas.data.star.map((item, index) => {
                    if (index == type.index) {
                        this.setState({star: index})
                    }
                })
            }
        } else {
            {
                datas.data.province.map((item, index) => {
                    if (index == type.index) {
                        this.setState({province: index})
                    }
                })
            }
        }
    }

    submit() {
        let sex = datas.data.sex[this.state.sex]
        let star = this.state.star
        if (star == 0) {
            star = ''
        } else {
            star--
        }
        let provice = datas.data.province[this.state.province]
        const personalMessage = {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'sex=' + sex + '&constellation=' + star + '&province=' + provice
        }

        fetch('http://yanzhi.top/origin/v1/getNewRanking.do', personalMessage).then(res => res.json())
            .then(json => {
                this.setState({filterdatas: json})
            })
        this.setState({showfilter: false})
        // 清楚原来选中的
        this.setState({sex: 0})
        this.setState({star: 0})
        this.setState({province: 0})
    }

    render() {
        const stylemask = {
            all: {
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.4)',
                position: 'fixed',
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
                zIndex: '99999',
                overflow: 'hidden'
            },
            showbox: {
                width: '86%',
                padding: '20px 0px 70px 16px',
                backgroundColor: '#fff',
                borderRadius: '10px',
                position: 'fixed',
                left: '7%',
                top: '60px',
                bottom: '80px',
                overflowY: 'scroll',
                overflowX: 'hidden'
            },
            filterdiv: {
                width: '20px',
                height: '20px',
                position: 'absolute',
                right: '12px',
                top: '8px'
            }
        }
        let arraddress = datas.data.province
        let arrstar = datas.data.star
        let arrsex = datas.data.sex
        const showfilterList = this.state.showfilter
            ? <div style={stylemask.all}>
                <div class="identifyfilter"><Button type="danger" onClick={this.submit.bind(this)}>确认筛选</Button>
                    <div onClick={this.closepop.bind(this)}><span class="icon-guanbi"></span></div>
                </div>
                <div style={stylemask.showbox} class="fliter_content">
                    <p>性别筛选</p>
                    <div class="content_model">
                        {arrsex.map((item, index) => {
                            return <NewPersonFilterModel event={this.match.bind(this)} state={this.state.sex}
                                                         filtertype='sex' key={index} index={index} name={item}/>
                        })}
                    </div>
                    <p>星座筛选</p>
                    <div class="content_model">
                        {arrstar.map((item, index) => {
                            return <NewPersonFilterModel event={this.match.bind(this)} state={this.state.star}
                                                         filtertype='star' key={index} index={index} name={item}/>
                        })}
                    </div>
                    <p>地区</p>
                    <div class="content_model">
                        {arraddress.map((item, index) => {
                            return <NewPersonFilterModel event={this.match.bind(this)} state={this.state.province}
                                                         filtertype='address' key={index} index={index} name={item}/>
                        })}
                    </div>
                </div>
            </div>
            : ''
        const redclass = this.state.showfilter
            ? ' lightfilter'
            : ''
        return (
            <div>
                <div>
                    <div style={{position: 'relative'}}>
                        <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
                            <TabPane tab="人气榜" key="1"><Popularity/></TabPane>
                            <TabPane tab="新人榜" key="2"><NewPerson newdatas={this.state.filterdatas}/></TabPane>
                            <TabPane tab="贡献榜" key="3"><Contribution/></TabPane>
                        </Tabs>
                        {this.state.statuspages == 2 ?
                            <div onClick={this.showfilter.bind(this)} style={stylemask.filterdiv}><span
                                style={{position: 'relative', top: '3px'}}
                                className={'icon-shaixuan' + redclass}></span></div> : ''}
                    </div>
                </div>
                {showfilterList}
            </div>
        )
    };
}
