import React from 'react'

export default class FilterContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            datas: '',
            radarUserInfo: '',
            sex: true,
            diomand: 'yes'
        }
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.datas) {
            this.setState({
                datas: nextProps.datas,
                radarUserInfo: nextProps.datas.data.radarUserInfo
            })
        }
    }

    render() {
        const container = {
            padding: '2% 3%'
        }
        const cityell = {
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            overflow: 'hidden'
        }
        const images = this.state.radarUserInfo !== ''
            ? this.state.radarUserInfo.map((perItem, index) => (
                <div class="image_block" key={index}>
                    <div class="custom_image">
                        {perItem.headUrls ? <a href={'http://yanzhi.top/share/index/' + perItem.userId + '.html'}><img
                            src={perItem.headUrls + '!gdsize100'}/></a> : <div></div>}
                    </div>
                    <div class="custom_card">
                        <div class={'sex ' + ('sex' in perItem ? (perItem.sex === '男' ? 'boy' : 'girl') : '')}>
                            <span
                                class={'sex' in perItem ? (perItem.sex === '男' ? 'icon-boy' : 'icon-girl') : ''}></span><span
                            style={{marginLeft: '1px'}}>{perItem.age}</span>
                        </div>
                        {perItem.leaguer ? <div class="diomand"><img src="./src/images/diomand.png"/></div> : ''}
                        <div style={cityell}><span>{perItem.city}</span></div>
                    </div>
                </div>
            ))
            : <div style={{height: '40px', paddingLeft: '0.49rem'}}>loading...</div>
        return (
            <div style={container}>
                {images}
            </div>
        )
    }
}
