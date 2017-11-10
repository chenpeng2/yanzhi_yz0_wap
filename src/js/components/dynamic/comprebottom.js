import React from 'react'

export default class CompreBottom extends React.Component {
    constructor() {
        super()
        this.state = {
            datas: ''
        }
    }

    componentDidMount() {
        this.setState({datas: this.props.bottomdatas})
    }

    render() {
        const lists = this.state.datas
            ? <div>
                <div class="comprebottom_bottom">
                    <div class="address">{this.state.datas.address}</div>
                    <div><span class="icon-liulanliang"></span>{this.state.datas.viewNums}</div>
                </div>
                <div class="pinlun_flex">
                    <div><span class="icon-pinlun"></span>{this.state.datas.commentCount}</div>
                    <div><span class="icon-liwu"></span>{this.state.datas.productCount}</div>
                    <div><span class="icon-dianzan"></span>{this.state.datas.praiseNums}</div>
                </div>
            </div>
            : ''
        return (
            <div>
                {lists}
            </div>
        )
    };
}
