import React from 'react'
import Blank from '../index_menu/blank'

export default class ContributionModel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const searchmod2 = {
            _all: {
                margin: '0 10px',
                position: 'relative'
            },
            all: {
                padding: '12px',
                display: 'flex'
            },
            left: {
                width: '52px',
                marginRight: '11px'
            },
            right: {
                marginTop: '5px'
            },
            right_top: {
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
        let userId = this.props.rank.userId
        return (
            <div>
                <Blank/>
                <div style={searchmod2.all}>
                    <div style={searchmod2.left}>
                        {this.props.rank.userId && this.props.rank.leaguer
                            ? <a href={'http://yanzhi.top/share/index/' + userId + '.html'}><img
                                style={{width: '100%', borderRadius: '50%'}}
                                src={'rank' in this.props ? 'headPath' in this.props.rank ? this.props.rank.headPath + '!gdsize100' : './src/images/filterBg.png' : './src/images/filterBg.png'}/></a>
                            : <img style={{width: '100%', borderRadius: '50%'}}
                                   src={'rank' in this.props ? 'headPath' in this.props.rank ? this.props.rank.headPath + '!gdsize100' : './src/images/filterBg.png' : './src/images/filterBg.png'}/>}
                    </div>
                    <div style={searchmod2.right}>
                        <div style={searchmod2.right_top}>
                            <p style={searchmod2.right_top_l}>
                                {'rank' in this.props ? this.props.rank.nickName : ''}
                            </p>
                            <div class="custom">
                                <div
                                    class={'sex ' + ('rank' in this.props ? (this.props.rank.sex === '男' ? 'boy' : 'girl') : 'girl')}>
                        <span
                            class={'rank' in this.props ? (this.props.rank.sex === '男' ? 'icon-boy' : 'icon-girl') : ''}>
                        </span>
                                    <span>
                          {'rank' in this.props ? 'age' in this.props.rank ? this.props.rank.age : '0' : '23'}
                        </span>
                                </div>
                            </div>
                        </div>
                        <p style={sizecolor.model1}>
                            累计活跃：{'rank' in this.props ? this.props.rank.monthRewardAmount : '0'}
                        </p>
                    </div>
                </div>
            </div>
        )
    };
}
