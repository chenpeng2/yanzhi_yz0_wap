/**
 * Created by Administrator on 2017-4-28-0028.
 */

import React, {Component} from 'react'

const pStyle = {
    borderBottom: '1px solid #efeff4',
    lineHeight: '1.796rem',
    fontSize: '0.7755rem',
    textAlign: 'center'
}

class Title extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <p style={pStyle}>{this.props.title}</p>
        )
    }
}

export default Title
