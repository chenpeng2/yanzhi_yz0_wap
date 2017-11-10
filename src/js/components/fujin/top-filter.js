import React from 'react'

export default class TopFilter extends React.Component {
    render() {
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
                height: '30px', marginTop: '10px'
            }
        }

        return (
            <div style={styleTop.all}>
                <div style={{position: 'absolute', paddingLeft: '12px'}}><span style={styleTop.topLeft}
                                                                               class='icon-shouji'> </span></div>
                <div style={styleTop.bb,styleTop.top_right}><img style={styleTop.topRightImg}
                                                                 src='./src/images/logo.png'/></div>
            </div>
        )
    }
}
