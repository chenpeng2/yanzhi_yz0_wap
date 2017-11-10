import React from 'react'

export default class PopularityModelComment extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const searchmod1 = {
            all: this.props.first && this.props.bottomSty
                ? {
                    width: '100%',
                    padding: '10px 16px 10px 14px',
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    display: 'flex',
                    position: 'absolute',
                    bottom: '0px'
                }
                : {
                    width: '100%',
                    padding: '10px 4px 10px 2px',
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
        let userId = this.props.rank.userId
        return (
            <div style={searchmod1.all}>
                <div style={searchmod1.left}>
                    {this.props.rank.userId && this.props.rank.leaguer
                        ? <a href={'http://yanzhi.top/share/index/' + userId + '.html'}><img
                            style={{width: '75px', borderRadius: '50%'}}
                            src={'rank' in this.props ? this.props.rank.headPath + '!gdsize100' : ''}/></a>
                        : <img style={{width: '75px', borderRadius: '50%'}}
                               src={'rank' in this.props ? this.props.rank.headPath + '!gdsize100' : ''}/>
                    }
                </div>
                <div style={searchmod1.right}>
                    <div style={searchmod1.right_top}>
                        <div style={searchmod1.right_top_l}>{'rank' in this.props ? this.props.rank.nickName : ''}</div>
                        <div style={searchmod1.right_top_m} class="custom">
                            <div
                                class={'sex ' + ('rank' in this.props ? (this.props.rank.sex === '男' ? 'boy' : 'girl') : '')}>
											<span
                                                class={'rank' in this.props ? (this.props.rank.sex === '男' ? 'icon-boy' : 'icon-girl') : ''}>
										</span>
                                <span>{'rank' in this.props ? this.props.rank.age : ''}</span>
                            </div>
                            {this.props.rank.leaguer ? <img src="./src/images/diomand.png"/> : ''}
                        </div>
                        <div style={searchmod1.right_top_r}><span class="icon-liulanliang view_count"></span>
                            <span>{'rank' in this.props ? this.props.rank.monthCount : '0'}</span>
                        </div>
                    </div>
                    <p style={sizecolor.model1}>本月活跃：{'rank' in this.props ? this.props.rank.monthAmount : '0'}</p>
                    <p style={sizecolor.model1}>累计活跃：{'rank' in this.props ? this.props.rank.accumulateAmount : '0'}</p>
                    <p>招募商:暂无</p>
                    <p class="zanzhu">赞助商：暂无</p>
                </div>
            </div>
        )
    }
}
