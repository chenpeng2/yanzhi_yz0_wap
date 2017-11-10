import React from 'react'
import {Link} from 'react-router'
import Blank from '../dynamic/blank'
import CompreTop from '../dynamic/compretop'
import CompreBottom from '../dynamic/comprebottom'

function aa() {
}

export default class Comprehensive extends React.Component {
    constructor() {
        super()
        this.state = {
            datas: ''
        }
    }

    componentWillMount() {
        this.setState({datas: this.props.userdatas})
    }

    componentDidMount() {
        const arr = this.state.datas
        const arrdata = arr.list
        arrdata.map((newsItem, index) => {
            if (newsItem.imageUrls) {
                if (newsItem.type == 1) {

                } else {
                    var images = newsItem.imageUrls.split('&')
                    images.map((item, index) => images[index] += '!gaoyanzhiDB')
                    setTimeout(function () {
                        $(function () {
                            if (images.length == 1) {
                                $('#gallery' + newsItem.dynamicId).css('width', '7.4062rem')
                                $('#gallery' + newsItem.dynamicId).css('margin-left', '0')
                            } else if (images.length == 2) {
                            } else if (images.length == 3) {
                            } else if (images.length == 4) {
                                $('#gallery' + newsItem.dynamicId).css('width', '11.2524rem')
                                $('#gallery' + newsItem.dynamicId).css('margin-left', '0')
                            } else if (images.length == 5) {
                                $('#gallery' + newsItem.dynamicId).css('width', '16rem')
                                $('#gallery' + newsItem.dynamicId).css('margin-left', '0')
                            }
                            $('#gallery' + newsItem.dynamicId).imagesGrid({
                                images: images
                            })
                        })
                    }, 1500)
                }
            }
        })

    }

    componentWillReceiveProps(nextProps) {

        this.setState({datas: nextProps.userdatas})
        const arr = nextProps.userdatas
        const arrdata = arr.list
        arrdata.map((newsItem, index) => {
            if (newsItem.imageUrls) {
                if (newsItem.type == 1) {

                } else {
                    var images = newsItem.imageUrls.split('&')
                    images.map((item, index) => images[index] += '!gaoyanzhiDB')
                    setTimeout(function () {
                        $(function () {
                            if (images.length == 1) {
                                $('#gallery' + newsItem.dynamicId).css('width', '7.4062rem')
                                $('#gallery' + newsItem.dynamicId).css('margin-left', '0')
                            } else if (images.length == 2) {
                            } else if (images.length == 3) {
                            } else if (images.length == 4) {
                                $('#gallery' + newsItem.dynamicId).css('width', '11.2524rem')
                                $('#gallery' + newsItem.dynamicId).css('margin-left', '0')
                            } else if (images.length == 5) {
                                $('#gallery' + newsItem.dynamicId).css('width', '16rem')
                                $('#gallery' + newsItem.dynamicId).css('margin-left', '0')
                            }
                            $('#gallery' + newsItem.dynamicId).imagesGrid({
                                images: images
                            })
                        })
                    }, 1500)
                }
            }
        })
    }

    render() {
        const user = {
            all: {
                margin: '0.4rem 0.4rem',
                position: 'relative'
            },
            bofang: {
                fontSize: '1.5rem',
                position: 'absolute',
                left: '4rem',
                top: '50%',
                marginTop: '-0.75rem',
                marginLeft: '-0.75rem',
                color: '#fff'
            }
        }
        const videostyle2 = {
            width: '8rem',
            height: '10rem',
            backgroundColor: '#000'
        }
        const {datas} = this.state
        const lists = datas.length !== 0
            ? datas.list.map((newsItem, index) => (
                <div key={index}>
                    {newsItem.type == 0
                        ? <div>
                            <CompreTop topdatas={newsItem}/>
                            <div class="content_texts">
                                <p>{newsItem.content}</p>
                            </div>
                            <div>
                                <div class="htmleaf-container">
                                    <div class="htmleaf-content">
                                        <div id={'gallery' + newsItem.dynamicId}></div>
                                    </div>
                                </div>
                            </div>
                            <CompreBottom bottomdatas={newsItem}/>
                        </div>
                        : <div>
                            <Blank/>
                            <CompreTop topdatas={newsItem}/>
                            <div class="content_texts">
                                <p><span class="title">#最近话题名称#</span>我倔强的抬起头、不让自己哭出来! 原文
                                    链接：<span class="icon-chaolianjie">网页链接</span></p>
                            </div>
                            <div style={user.all}>
                                <div style={newsItem.videoThumb ? {
                                    width: '8rem',
                                    height: '10rem',
                                    background: 'url(' + newsItem.videoThumb + '!gaoyanzhiDB) no-repeat',
                                    backgroundSize: 'cover'
                                } : videostyle2}>
                                    <Link to={{
                                        pathname: '/videoplay',
                                        state: newsItem,
                                        query: {num: this.props.videodata}
                                    }}>
                                        <span class="icon-bofang" style={user.bofang}></span>
                                    </Link>
                                </div>
                            </div>
                            <CompreBottom bottomdatas={newsItem}/>
                        </div>
                    }
                </div>
            ))
            : ''
        return (
            <div>
                <Blank/>
                {lists}
            </div>
        )
    };
}
