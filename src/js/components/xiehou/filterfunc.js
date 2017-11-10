import React from 'react'
import $ from 'jQuery'

import {
    ButtonToolbar, Selected
} from 'amazeui-react'
export default class FilterFunc extends React.Component {
    constructor() {
        super()
        this.state = {
            mask: false,
            sexData: 0
        }
    }

    componentDidMount() {

    }

    changetest(e) {
        var sexData
        $('.ul li').css('color', 'rgba(0,0,0,0.65)')
        e.target.style.color = 'red'
        console.log(e.target.innerHTML)
        if (e.target.innerHTML == '只看女生') {
            sexData = 1
        } else if (e.target.innerHTML == '只看男生') {
            sexData = 2
        } else {
            sexData = 0
        }

        this.props.change(sexData)
        this.setState({
            mask: false
        })
    }

    showmask() {
        this.setState({
            mask: true
        })
    }

    render() {
        const stylefilter = {
            height: '50px',
            borderBottom: '1px solid #ccc',
            position: 'relative'
        }
        const filterMidd = {
            flexGrow: 1,
            paddingTop: '17px',
            textAlign: 'center',
            fontSize: '15px'
        }
        const filterRight = {
            paddingTop: '19px',
            position: 'absolute',
            right: '0px', top: '0px',
            width: '32px'
        }
        const maskshow = this.state.mask
            ? <div class="mask"></div>
            : ''

        return (
            <div style={stylefilter}>
                {maskshow}
                {this.state.mask ?
                    <div class='shaixuan'>
                        <img src="./src/images/sanjiao.png"/>
                        <ul class='ul'>
                            <li onClick={this.changetest.bind(this)}>只看女生</li>
                            <li onClick={this.changetest.bind(this)}>只看男生</li>
                            <li onClick={this.changetest.bind(this)}>查看全部</li>
                        </ul>
                    </div>
                    : <div class='shaixuan' style={{opacity: '0', position: 'absolute', zIndex: '-1'}}>
                        <img src="./src/images/sanjiao.png"/>
                        <ul class='ul'>
                            <li onClick={this.changetest.bind(this)}>只看女生</li>
                            <li onClick={this.changetest.bind(this)}>只看男生</li>
                            <li onClick={this.changetest.bind(this)}>查看全部</li>
                        </ul>
                    </div>}
                <div style={filterMidd}>邂&nbsp;逅</div>
                <div><span style={filterRight} class="icon-shaixuan_pre" onClick={this.showmask.bind(this)}></span>
                </div>
            </div>
        )
    }
}
