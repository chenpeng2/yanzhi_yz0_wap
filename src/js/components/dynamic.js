import React from 'react'
import SearchToper from './dynamic/search'
import SearchTab from './dynamic/searchtab'

export default class Dynamic extends React.Component {
    constructor() {
        super()
        this.state = {
            searchdatas: '',
            getdatasuser: '',
            getdatascompre: '',
            key: '1',
            keycookie: localStorage.getItem('keycookie') || '',
            hassearchdata: localStorage.getItem('hassearchdata')
        }
    }

    componentDidMount() {
        if (this.state.hassearchdata) {
            let num = localStorage.getItem('seahchnum')
            console.log(num)
            const personalMessage = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'nickName=' + num + '&pageNo=1&perPage=100',
            }
            const personalMessage2 = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'context=' + num + '&pageNo=1&perPage=100',
            }
            fetch('http://yanzhi.top/origin/v1/getSearchRankingList.do', personalMessage)
                .then(response => response.json()).then(json => {
                this.setState({getdatasuser: json})
            })
            fetch('http://yanzhi.top/origin/v1/getSearchDynamic.do', personalMessage2)
                .then(response => response.json()).then(json => {
                this.setState({getdatascompre: json})
            })
        }
    }

    componentWillUnmount() {
        localStorage.setItem('keycookie', this.state.keycookie)
    }

    postuserdatas(e) {
        if (localStorage.getItem('keycookie')) {
            localStorage.setItem('keycookie', '')
        }
        this.setState({keycookie: e.target.value})
        if (this.state.key == 1) {
            const personalMessage = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'nickName=' + e.target.value + '&pageNo=1&perPage=100',
            }
            fetch('http://yanzhi.top/origin/v1/getSearchRankingList.do', personalMessage)
                .then(response => response.json()).then(json => {
                this.setState({getdatasuser: json})
            })

        } else {
            const personalMessage = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'context=' + e.target.value + '&pageNo=1&perPage=100',
            }
            fetch('http://yanzhi.top/origin/v1/getSearchDynamic.do', personalMessage)
                .then(response => response.json()).then(json => {
                this.setState({getdatascompre: json})
            })
        }
    }

    keychange(key) {
        if (this.state.key == 1) {
            const personalMessage = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'context=' + this.state.keycookie + '&pageNo=1&perPage=100',
            }
            fetch('http://yanzhi.top/origin/v1/getSearchDynamic.do', personalMessage)
                .then(response => response.json()).then(json => {
                this.setState({getdatascompre: json})
            })
        } else {
            const personalMessage = {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'nickName=' + this.state.keycookie + '&pageNo=1&perPage=100',
            }
            fetch('http://yanzhi.top/origin/v1/getSearchRankingList.do', personalMessage)
                .then(response => response.json()).then(json => {
                this.setState({getdatasuser: json})
            })
        }
        this.setState({key: key})
    }

    render() {
        const styleSearch = {
            backgroundColor: '#efeff4'
        }
        const searchtabs = this.state.getdatasuser || this.state.getdatascompre
            ? <SearchTab datasuser={this.state.getdatasuser} datascompre={this.state.getdatascompre}
                         keyfun={this.keychange.bind(this)} tovideodata={this.state.keycookie}/>
            : ''
        return (
            <div style={styleSearch}>
                <SearchToper searchparam={this.postuserdatas.bind(this)}/>
                {searchtabs}
            </div>
        )
    };
}
