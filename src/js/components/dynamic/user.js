import React from 'react'
import {Link} from 'react-router'
import Blank from '../dynamic/blank'
import SearchMod1 from '../dynamic/searchmod1'
import SearchMod2 from '../dynamic/searchmod2'

export default class User extends React.Component {
    constructor() {
        super()
        this.state = {
            datas: '',
            tovideodata: ''
        }
    }

    componentWillMount() {
        this.setState({datas: this.props.userdatas})
        this.setState({tovideodata: this.props.videodata})
    }

    componentWillReceiveProps(nextProps) {
        this.setState({datas: nextProps.userdatas})
        this.setState({tovideodata: nextProps.videodata})
    }

    render() {
        const user = {
            all: {
                margin: '0.4rem 0.4rem',
                position: 'relative'
            },
            bofang: {
                fontSize: '1.5rem',
                position: 'absolute',
                left: '50%',
                top: '50%',
                marginTop: '-9px',
                marginLeft: '-9px',
                color: '#fff'
            }
        }
        const videostyle2 = {
            width: '15.2rem',
            height: '15.2rem',
            backgroundColor: '#000'
        }
        const {datas} = this.state
        const lists = datas.list.length !== 0
            ? datas.list.map((newsItem, index) => (
                <div key={index}>
                    {newsItem.leaguer == false
                        ? <div><Blank/><SearchMod2 noleaguer={newsItem}/></div>
                        : newsItem.backgroundType == 1
                            ? <div>
                                <Blank/>
                                <div style={user.all}>
                                    <div style={newsItem.backgroundPath ? {
                                        width: '15.2rem',
                                        height: '15.2rem',
                                        background: 'url(' + newsItem.backgroundPath + '!gaoyanzhiDB) no-repeat',
                                        backgroundSize: 'cover'
                                    } : videostyle2}>
                                        <Link to={{
                                            pathname: '/videoplay',
                                            state: newsItem,
                                            query: {num: this.state.tovideodata}
                                        }}>
                                            <span class="icon-bofang" style={user.bofang}></span>
                                        </Link>
                                    </div>
                                    <SearchMod1 leaguer={newsItem} first={true}/>
                                </div>
                            </div>
                            : newsItem.backgroundPath
                                ? <div>
                                    <Blank/>
                                    <div style={user.all}>
                                        <div><img src={newsItem.backgroundPath + '!gaoyanzhiDB'}
                                                  style={{width: '100%'}}/></div>
                                        <SearchMod1 leaguer={newsItem} first={true}/>
                                    </div>
                                </div>
                                : <div>
                                    <Blank/>
                                    <div style={user.all}>
                                        <SearchMod1 leaguer={newsItem} first={false}/>
                                    </div>
                                </div>
                    }
                </div>
            ))
            : <div style={{paddingLeft: '10px'}}>没有任何数据...</div>
        return (
            <div>
                {lists}
            </div>
        )
    };
}
