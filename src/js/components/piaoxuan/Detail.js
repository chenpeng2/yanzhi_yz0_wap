/**
 * Created by Administrator on 2017-4-28-0028.
 */
/**
 * Created by Administrator on 2017-4-28-0028.
 */

import React, {Component} from 'react'

const divStyle = {
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.49rem',
    },
    aStyle = {
        fontSize: '0.571rem',
        borderRadius: '0.51rem',
        color: '#fff',
        textAlign: 'center',
        background: '#ff8585',
        width: '4.082rem',
        height: '1.143rem',
        lineHeight: '1.143rem',
    },
    imgStyle = {
        width: '3.266rem',
        height: '3.266rem',
        verticalAlign: 'middle',
        background: '#efeff4',
        borderRadius: '50%',
    },
    spanStyle = {
        display: 'block',
    },
    spStyle = {
        fontSize: '0.551rem',
        display: 'inline-block',
        color: '#777',
        paddingLeft: '0.408rem',
        verticalAlign: 'middle',
    },
    hStyle = {
        color: '#000',
        margin: '0',
        padding: '0',
        fontSize: '0.735rem',
    },
    starStyle = {
        background: 'url(./src/images/star.png) no-repeat left',
        paddingLeft: '0.735rem',
        backgroundSize: '0.408rem',

    }, starLast = {
        backgroundPosition: 'left .08rem',
    }

class Detail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const headdatas = this.props.headdatas.detail
        if (this.props.title == '投票信息') {
            let userId = headdatas.faceDatum ? headdatas.faceDatum.userId : ''
            return (
                <div style={divStyle}>

                    <p>
                        <a href={'http://www.yanzhi.top/share/index/' + userId + '.html'}>
                            {headdatas.headPath ?
                                <img style={imgStyle} src={headdatas.headPath + '!gdsize100'} alt="头像"/> :
                                <img style={imgStyle} src="./src/images/logo.svg" alt="头像"/>}
                        </a>

                        <span style={spStyle}>
							<span style={hStyle}>
                                <a style={hStyle} href={'http://www.yanzhi.top/share/index/' + userId + '.html'}>
                                    {headdatas.nickName}
                                </a>
                            </span>
							<span style={{...spanStyle, ...{width: '7rem'}}}>{headdatas.signature}</span>
							<span style={spanStyle}>已有<b>{headdatas.voteNumber}</b>个人投过</span>
						</span>
                    </p>
                    <a style={aStyle} href="//yanzhi.top/app/download.html">下载APP投票</a>

                </div>
            )
        } else {
            return (
                <div style={divStyle}>

                    <p>
                        <span style={spStyle}>
							<span style={{...spanStyle, ...starStyle}}>点开投票可以看到候选人们的更多生活照和视频哦~</span>
							<span style={{...spanStyle, ...starStyle}}>觉得好看选支持，觉得魅力不够选不支持；</span>
							<span style={{...spanStyle, ...starStyle, ...starLast}}>两日内累计总共投票数，得分超过一定比例，候选人即成为会员，颜值审核由你决定！</span>
						</span>
                    </p>

                </div>
            )
        }
    }
}

export default Detail
