import React from 'react'

export default class TopFilter extends React.Component {
    render() {
        const styleTop = {
            all: {
                fontSize: '18px',
                height: '50px',
                boxShadow: '0 2px 10px #ccc'
            }, topLeft: {
                width: '60px',
                display: 'inline-block',
                verticalAlign: 'middle',
                paddingTop: '16px'
            }, top_right: {
                width: '100%',
                textAlign: 'center',
                height: '50px',
                backgroundColor: '#fff',
                position: 'fixed',
                zIndex: '999999'
            }, topRightImg: {
                height: '100px', marginTop: '-25px'
            }
        }
        return (
            <div style={styleTop.all}>
                <div style={{position: 'fixed', zIndex: '9999999', paddingLeft: '12px'}}><a
                    href="http://yanzhi.top/appView/operate/appView.html" style={{color: 'rgba(0,0,0,0.65)'}}><span
                    style={styleTop.topLeft} class='icon-shouji'></span></a></div>
                <div style={styleTop.top_right}><a href="http://yanzhi.top/appView/operate/appView.html" style={{
                    display: 'inline-block',
                    height: '100%',
                    overflow: 'hidden'
                }}><img style={styleTop.topRightImg} src='./src/images/logo.svg'/></a></div>
            </div>
        )
    }
}
