import React from 'react'

export default class SearchMod2 extends React.Component {
    constructor() {
        super()
        this.state = {
            perdatas: ''
        }
    }

    componentDidMount() {
        this.setState({perdatas: this.props.noleaguer})
    };

    render() {
        const searchmod2 = {
            all: {
                padding: '12px',
                display: 'flex'
            }, left: {
                width: '52px',
                marginRight: '11px',
                height: '52px',
                borderRadius: '50%',
                overflow: 'hidden'
            }, right: {
                marginTop: '5px'
            }, right_top: {
                display: 'flex'
            },
            right_top_l: {
                marginRight: '7px'
            }
        }
        const sizecolor = {
            model1: {
                color: '#ff7800'
            }
        }
        const perdatas = this.state.perdatas
            ? <div style={searchmod2.all}>
                <div style={searchmod2.left}>
                    {this.props.noleaguer.userId && this.props.noleaguer.leaguer
                        ? <a href={'http://yanzhi.top/share/index/' + this.props.noleaguer.userId + '.html'}><img
                            style={{width: '100%'}}
                            src={this.props.noleaguer.headPath ? this.props.noleaguer.headPath : './src/images/filterBg.png'}/></a>
                        : <img style={{width: '100%'}}
                               src={this.props.noleaguer.headPath ? this.props.noleaguer.headPath + '!gdsize100' : './src/images/filterBg.png'}/>}
                </div>
                <div style={searchmod2.right}>
                    <div style={searchmod2.right_top}>
                        <p style={searchmod2.right_top_l}>{this.state.perdatas.nickName}</p>
                        <div class="custom">
                            <div
                                class={'sex ' + ('perdatas' in this.state ? (this.state.perdatas.sex === '男' ? 'boy' : 'girl') : 'girl')}>
                                <span
                                    class={'perdatas' in this.state ? (this.state.perdatas.sex === '男' ? 'icon-boy' : 'icon-girl') : ''}></span><span>{this.state.perdatas.age}</span>
                            </div>
                        </div>
                    </div>
                    <p style={sizecolor.model1}>累计活跃：0</p>
                </div>
            </div>
            : ''
        return (
            <div>
                {perdatas}
            </div>
        )
    };
}
