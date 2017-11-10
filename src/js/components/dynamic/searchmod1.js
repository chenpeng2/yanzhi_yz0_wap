import React from 'react'

export default class SearchMod1 extends React.Component {
    constructor() {
        super()
        this.state = {
            datas: ''
        }
    }

    componentDidMount() {
        this.setState({datas: this.props.leaguer})
    }

    render() {
        const searchmod1 = {
            all: this.props.first ? {
                width: '100%',
                padding: '10px 4px 10px 2px',
                backgroundColor: 'rgba(255,255,255,0.6)',
                display: 'flex', position: 'absolute', bottom: '0px'
            } : {
                padding: '10px 16px 10px 14px',
                backgroundColor: 'rgba(255,255,255,0.6)',
                display: 'flex'
            },
            left: {
                marginRight: '11px',
                marginLeft: '12px'
            },
            right: {
                flexGrow: '1',
            },
            right_top: {
                display: 'flex'
            },
            right_top_l: {
                marginRight: '7px'
            },
            right_top_m: {
                flexGrow: '1'
            },
            right_top_r: {
                width: '50px'
            }
        }
        const sizecolor = {
            model1: {
                color: '#ff7800'
            }
        }
        const datas = this.state.datas
            ? <div style={searchmod1.all}>
                <div style={searchmod1.left}>
                    {this.state.datas.userId
                        ? <a href={'http://yanzhi.top/share/index/' + this.state.datas.userId + '.html'}><img
                            style={{width: '75px', borderRadius: '50%'}}
                            src={this.state.datas.headPath ? this.state.datas.headPath + '!gdsize100' : './src/images/filterBg.png'}/></a>
                        : <img style={{width: '75px', borderRadius: '50%'}}
                               src={this.state.datas.headPath ? this.state.datas.headPath : './src/images/filterBg.png'}/>}

                </div>
                <div style={searchmod1.right}>
                    <div style={searchmod1.right_top}>
                        <div style={searchmod1.right_top_l}>{this.state.datas.nickName}</div>
                        <div style={searchmod1.right_top_m} class="custom">
                            <div
                                class={'sex ' + ('datas' in this.state ? (this.state.datas.sex === '男' ? 'boy' : 'girl') : 'girl')}>
                                <span
                                    class={'datas' in this.state ? (this.state.datas.sex === '男' ? 'icon-boy' : 'icon-girl') : ''}></span><span>{this.state.datas.age}</span>
                            </div>
                            <img src="./src/images/diomand.png"/></div>
                        <div style={searchmod1.right_top_r}><span
                            class="icon-liulanliang view_count"></span><span>{this.state.datas.monthCount}</span></div>
                    </div>
                    <p style={sizecolor.model1}>本月活跃：{this.state.datas.monthAmount}</p>
                    <p style={sizecolor.model1}>累计活跃：{this.state.datas.accumulateAmount}</p>
                    <p>招募商：暂无</p>
                    <p class="zanzhu">赞助商：暂无</p>
                </div>
            </div>
            : ''
        return (
            <div>
                {datas}
            </div>
        )
    };
}
