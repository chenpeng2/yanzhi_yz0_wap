import React from 'react'
import moment from 'moment'

export default class CompreTop extends React.Component {
    constructor() {
        super()
        this.state = {
            datas: ''
        }
    }

    componentDidMount() {
        this.setState({datas: this.props.topdatas})
    }

    render() {
        const compretop = {
            all: {
                display: 'flex',
                padding: '12px'
            }, left: {
                flexGrow: 1,
                overflow: 'hidden'
            }, left_top: {
                display: 'flex'
            }, left2: {
                float: 'left'
            },
            right: {
                width: '60px',
                height: '32px',
                color: 'red',
                border: '1px solid red',
                borderRadius: '5px',
                textAlign: 'center',
                marginTop: '4px',
                paddingTop: '6px'

            }
        }
        const lists = this.state.datas
            ? <div style={compretop.all}>
                <div style={compretop.left}>
                    {this.state.datas.userId && this.state.datas.leaguer
                        ? <a href={'http://yanzhi.top/share/index/' + this.state.datas.userId + '.html'}><img
                            style={{width: '35px', borderRadius: '50%', float: 'left', margin: '3px 8px 0 0'}}
                            src={this.state.datas.headPath ? this.state.datas.headPath + '!gdsize100' : './src/images/filterBg.png'}/></a>
                        : <img style={{width: '35px', borderRadius: '50%', float: 'left', margin: '3px 8px 0 0'}}
                               src={this.state.datas.headPath ? this.state.datas.headPath + '!gdsize100' : './src/images/filterBg.png'}/>}

                    <div style={compretop.left}>
                        <div style={compretop.left_top}><span
                            style={{marginRight: '9px'}}>{this.state.datas.nickName}</span>{this.state.datas.dynamicSkill ?
                            <p class="caiyi_mark">才艺</p> : ''}</div>
                        <p>{moment(this.state.datas.createTime).format('MM-DD-HH:mm')}</p>
                    </div>
                </div>
                <a href="http://yanzhi.top/app/download.html">
                    <div style={compretop.right}>
                        <span class="icon-jia" style={{position: 'relative', top: '1px'}}></span>
                        关注
                    </div>
                </a>
            </div>
            : ''
        return (
            <div>
                {lists}
            </div>
        )
    };
}
