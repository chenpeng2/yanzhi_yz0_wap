import React, {Component} from 'react'

import Title from '../piaoxuan/Title.js'

import Detail from '../piaoxuan/Detail.js'

class Banner extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Title title={this.props.title}/>
                <Detail title={this.props.title} location={this.props.location} headdatas={this.props}/>
            </div>
        )
    }
}

export default Banner
