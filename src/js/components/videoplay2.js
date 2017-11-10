import React from 'react'

export default class VideoPlay extends React.Component {
    componentDidMount() {
        // console.log(this.props)
        zymedia('video', {autoplay: true})
        var screenheight = window.screen.height / 2
        $('#modelView').width(window.screen.width)
        $('#modelView').height(window.screen.height)
        var videoheight = $('.zy_media').height() / 2
        var padding_top = screenheight - videoheight
        $('.playvideo').css({'top': padding_top})
        $('#modelView').css({'margin-top': -1 * (padding_top + $('.zy_media').height())})
    }

    pageback() {
        this.props.history.goBack()
    }

    render() {
        const data = this.props.location.state
        const datas = data.videoDatum
        return (
            <div class="playvideo">
                <span><img onClick={this.pageback.bind(this)} style={{
                    position: 'absolute',
                    zIndex: '999999999',
                    left: '20px',
                    top: '-110px',
                    width: '20px'
                }} src="./src/images/guanbi.png"/></span>
                <div class="zy_media">
                    <video class="video" poster={datas.videoThumb ? data.videoThumb : ''}
                           data-config='{"mediaTitle": "高颜值--视频"}'>
                        <source src={datas.path ? datas.path : ''} type="video/mp4"></source>
                        您的浏览器不支持HTML5视频
                    </video>
                </div>
                <div id="modelView">&nbsp;</div>
            </div>
        )
    };
}
