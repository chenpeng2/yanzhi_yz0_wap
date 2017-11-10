import React from 'react'
import TopFilter from '../components/commons/top-filter'
import FilterFunc from './fujin/filterfunc'
import FilterContainer from './fujin/filtercontainer'

export default class Root extends React.Component {
    constructor() {
        super()
        this.state = {
            persons: '',
            sex: 0
        }
        document.title = '邂逅'
    }

    componentDidMount() {
        var myFetchOptions = {
            method: 'POST'
        }
        fetch('http://yanzhi.top/v1/getOutsideUserInfo.do?sex=' + this.state.sex, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({persons: json})
            })
    }

    changesex(sexData) {
        var myFetchOptions = {
            method: 'POST'
        }
        fetch('http://yanzhi.top/v1/getOutsideUserInfo.do?sex=' + sexData, myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({persons: json})
                console.log(json)
            })
    }

    render() {
        const {news} = this.state
        return (
            <div>
                <TopFilter/>
                <FilterFunc change={this.changesex.bind(this)} title='邂&nbsp;逅'/>
                <FilterContainer datas={this.state.persons}/>
            </div>
        )
    };
}
