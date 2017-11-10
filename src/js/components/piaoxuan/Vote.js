/**
 * Created by Administrator on 2017-4-26-0026.
 */

import React, {Component} from 'react'

import Header from '../piaoxuan/Header.js'

import Banner from '../piaoxuan/Banner.js'

import Main from '../piaoxuan/Main.js'

class Vote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Ptitle: '选出你心中的高颜值男神女神',
            votelists: '32',
            detail: ''
        }
        document.title = '票选'
    }

    change(prop) {
        if (prop.params.id) {
            this.setState({Ptitle: '投票信息'})
        } else {
            this.setState({Ptitle: '选出你心中的高颜值男神女神'})
        }
    }

    componentDidMount() {
        const otherId = this.props.location.state
        otherId ? this.fetchperson(otherId.otherUserId) : ''
    }

    componentWillMount() {
        this.change(this.props)
        var myFetchOptions = {
            method: 'POST'
        }
        fetch('http://yanzhi.top/vote/v2/getVoteUserLIstById.do', myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({votelists: json})
            })
    }

    render() {
        const datas = this.state.votelists.code !== 0
            ? <Main title={this.state.Ptitle} location={this.props.location} detail={this.state.detail}
                    votelists={this.state.votelists}/>
            : null
        return (
            <div>
                <Header/>
                <Banner title={this.state.Ptitle} location={this.props.location}
                        detail={this.state.detail ? this.state.detail : ''}/>
                {datas}
            </div>
        )
    }

    fetchperson(id) {
        fetch('http://yanzhi.top/vote/v2/getOtherVoteUserInfo.do?otherUserId=' + id, {method: 'POST'}).then(res => res.json())
            .then(json => {
                this.setState({
                    detail: json.data
                })
            })
    }

    componentWillReceiveProps(nextProps) {
        this.change(nextProps)
        const searchpath = nextProps.location.state == null ? '' : nextProps.location.state
        if (nextProps.location.state !== null) {
            localStorage.setItem('person', searchpath.otherUserId)
        }
        nextProps.location.state !== null ?
            this.fetchperson(searchpath.otherUserId)
            : null
    }

}

export default Vote
