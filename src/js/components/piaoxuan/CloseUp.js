import React, {Component} from 'react'

import {Link} from 'react-router'

const pStyle = {
        borderLeft: '0.163rem solid #ff5151',
        fontSize: '0.571rem',
        paddingLeft: '0.163rem',
        margin: '0',
        color: '#222',
        lineHeight: '0.571rem',
    },
    divStyle = {
        width: '6.857rem',
        background: '#efeff4',
        margin: '0.45rem 0',
    },
    divVideoStyle = {
        width: '6.857rem',
        height: '6.857rem',
        background: '#efeff4',
        margin: '0.45rem 0',
    },
    CuStyle = {
        borderBottom: '1px solid #efeff4',
        padding: '0.49rem',
    }

class CloseUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            videodatas: ''
        }
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextprops) {
        this.setState({videodatas: nextprops})
    }

    render() {
        let Elem = ''
        if (this.props.title == '认证视频') {
            Elem =
                <div style={divVideoStyle}>
                    <Link to={{pathname: '/otherplay', state: this.props.datas}}>
                        <div style={{
                            width: '6.857rem',
                            height: '6.857rem',
                            backgroundColor: 'rgb(239, 239, 244)',
                            overflow: 'hidden',
                            position: 'relative'
                        }}><span class="icon-bofang" style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            fontSize: '1rem',
                            margin: '-0.5rem 0 0 -0.5rem',
                            color: '#fff'
                        }}></span><img src={this.props.datas.videoDatum.videoThumb}/></div>
                    </Link>
                </div>
        } else {
            Elem = <div style={divStyle}><img width={'100%'} height={'100%'} style={{display: 'block'}}
                                              src={this.props.url + '!gaoyanzhiDB'}/></div>
        }
        return (
            <div style={{...CuStyle, ...this.props.style}}>
                <p style={pStyle}>
                    {this.props.title}
                </p>

                {Elem}

            </div>
        )
    }
}

export default CloseUp
