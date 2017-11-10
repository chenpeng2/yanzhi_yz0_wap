/**
 * Created by Administrator on 2017-4-28-0028.
 */

import React, {Component} from 'react'

import Items from '../piaoxuan/Items.js'
import Blank from '../../components/commons/blank'

const pStyle = {
        borderLeft: '0.163rem solid #ff5151',
        fontSize: '0.571rem',
        paddingLeft: '0.163rem',
        margin: '0',
        color: '#222',
        lineHeight: '0.571rem',
    },
    aStyle = {
        width: '3.225rem',
        lineHeight: '1.265rem',
        color: '#ffbbbb',
        border: '1px solid #ffbbbb',
        borderRadius: '0.51rem',
        fontSize: '0.673rem',
        textAlign: 'center',
    },
    flexStyle = {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    bottomStyle = {
        padding: '0 0.24rem 0.408rem',
        width: '100%',
        float: 'left'
    },
    divStyle = {
        padding: '0.49rem',
        justifyContent: 'space-between',
    },
    flexCol = {
        flexFlow: 'column nowrap',
    },
    padStyle = {
        padding: '0 0.25rem',
    }

class Elect extends Component {
    constructor(props) {
        super(props)
        // document.title=this.props.title;
        this.state = {
            votelists_son_Lists: {},
            pageNo: '0'
        }

    }

    componentWillMount() {
        this.setState({votelists_son_Lists: this.sliceArr(this.props.votelists_son_alls, 9)[this.state.pageNo]})
    }

    sliceArr(array, size) {
        var result = []
        for (var x = 0; x < Math.ceil(array.length / size); x++) {
            var start = x * size
            var end = start + size
            result.push(array.slice(start, end))
        }
        return result
    }

    nextgroupdatas() {
        let num = ++this.state.pageNo
        const length = this.sliceArr(this.props.votelists_son_alls, 9).length
        if (num >= length) {
            num = 0
            this.setState({pageNo: 0})
        }
        var _this = this
        setTimeout(function () {
            _this.setState({votelists_son_Lists: _this.sliceArr(_this.props.votelists_son_alls, 9)[num]})
        }, 100)
    }

    componentWillReceiveProps(nextprops) {
        var _this = this
        setTimeout(function () {
            _this.setState({votelists_son_Lists: _this.sliceArr(_this.props.votelists_son_alls, 9)[_this.state.pageNo]})
        }, 300)
    }

    render() {
        const Lists = this.state.votelists_son_Lists && this.state.votelists_son_Lists.length
            ? this.state.votelists_son_Lists.map((newsItem, index) => (
                <div style={{width: '31.5%', float: 'left', margin: '0 0.8%'}} key={index}>
                    <Items headUrls={newsItem.headUrls} nickName={newsItem.nickName}
                           otherUserId={newsItem.otherUserId}/>
                </div>
            ))
            : <div style={{height: '40px', paddingLeft: '0.49rem'}}>没有任何数据</div>
        return (

            <div style={{...bottomStyle, ...this.props.style}}>
                <div style={{margin: '0 -0.24rem'}}><Blank/></div>
                <div style={{...flexStyle, ...divStyle}}>
                    <p style={pStyle}>
                        {this.props.title}
                    </p>
                    <a style={aStyle} href="javascript:void(0);" onClick={this.nextgroupdatas.bind(this)}>下一组</a>
                </div>
                {Lists}
            </div>
        )
    }
}

export default Elect
