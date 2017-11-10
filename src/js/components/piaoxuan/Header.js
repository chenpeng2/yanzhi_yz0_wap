/**
 * Created by Administrator on 2017-4-26-0026.
 */

import React, {Component} from 'react'

const styleTop = {
    all: {
        fontSize: '16px',
        height: '50px',
        boxShadow: '0 2px 10px #ccc'
    }, topLeft: {
        width: '60px',
        display: 'inline-block',
        verticalAlign: 'middle',
        paddingTop: '17px'
    }, top_right: {
        width: '100%',
        textAlign: 'center'
    }, topRightImg: {
        height: '100px', marginTop: '-25px'
    }
}

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styleTop.all}>
                <div style={{position: 'absolute', paddingLeft: '12px'}}><a
                    href="http://yanzhi.top/appView/operate/appView.html" style={{color: 'rgba(0,0,0,0.65)'}}><span
                    style={styleTop.topLeft} class='icon-shouji'></span></a></div>
                <div style={{...styleTop.bb, ...styleTop.top_right}}><a
                    href="http://yanzhi.top/appView/operate/appView.html" style={{color: 'rgba(0,0,0,0.65)'}}><img
                    style={styleTop.topRightImg} src='./src/images/logo.svg'/></a></div>
            </div>
        )
    }

    componentDidMount() {
        // console.log("Header");

    }
}

export default Header
