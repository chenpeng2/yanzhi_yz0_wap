import React, {Component} from 'react'

import CloseUp from '../piaoxuan/CloseUp.js'

import Elect from '../piaoxuan/Elect.js'

const Style = {
    border: '0',
}

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            votelists_son: '',
            votelists: '',
            videodatas: ''
        }
    }

    componentDidMount() {
        this.setState({votelists_son: this.props.votelists.data, votelists: this.props.votelists})
    }

    componentWillReceiveProps(nextprops) {
        this.setState({votelists_son: nextprops.votelists.data, votelists: nextprops.votelists})
    }

    render() {
        const videoDatas = this.props.detail !== ''
            ? this.props.detail
            : ''
        const data = this.state.votelists_son !== ''
            ? this.state.votelists_son
            : ''
        const datas_male = this.state.votelists.code == 'SUCCESS'
            ? <Elect style={{width: '100%'}} title="选男神" votelists_son_alls={this.state.votelists_son.boyList}/>
            : ''
        const datas_female = this.state.votelists.code == 'SUCCESS'
            ? <Elect style={{...{width: '100%'}, ...Style}} title="选女神"
                     votelists_son_alls={this.state.votelists_son.girlList}/>
            : ''
        const closeups = videoDatas !== ''
            ? <div>
                <CloseUp title="正面特写" url={videoDatas.faceDatum.path}/>
                <CloseUp title="全身特写" url={videoDatas.fullDatum.path}/>
                <CloseUp title="半身特写" url={videoDatas.halfDatum.path}/>
                <CloseUp title="认证视频" style={Style}
                         datas={videoDatas}/>
            </div>
            : ''
        if (this.props.title == '投票信息') {
            return (
                <div>
                    {closeups}
                </div>
            )
        } else {
            return (
                <div>
                    {datas_female}
                    {datas_male}
                </div>
            )
        }
    }
}

export default Main
