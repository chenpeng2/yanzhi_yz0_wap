import React from 'react'
import ContributionModel from '../index_menu/contributionmodel'
import LoadMore from '../index_menu/loadmore'

export default class SearchMod2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            rank: [],
            arrays: [],
            isLoadingMore: '',
            page: 0,
            isLoadingMore: false,
            showloadmore: false
        }
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

    loadMoreData() {
        // 加载下一页的数据，result
        ++this.state.page
        this.setState({rank: this.state.rank.concat(this.state.arrays[this.state.page]), isLoadingMore: true})
        var _this = this
        setTimeout(function () {
            _this.setState({isLoadingMore: false})
        }, 200)
        // 处理
        // this.resultHandle(result)
    }

    render() {
        const user = {
            marginTop: {
                marginTop: '10px'
            }
        }
        let data = this.state.rank
        return (
            <div style={user.marginTop}>
                {
                    data ? data.map((list) => {
                            return <ContributionModel rank={list} key={list.userId}/>
                        })
                        : ''
                }
                {this.state.showloadmore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''}
            </div>
        )
    }

    showloadmore() {
        var _this = this
        setTimeout(function () {
            _this.setState({showloadmore: true})
        })
    }

    componentWillMount() {
        fetch('http://yanzhi.top/origin/v1/rewardRankingList.do', {
            method: 'POST'
        }).then(res => res.json()).then(json => {
            this.setState({arrays: this.sliceArr(json.data.list, 10)})
            let arrays = this.sliceArr(json.data.list, 10)
            let length = json.data.list.length / 10
            this.setState({
                rank: arrays[this.state.page]
            })
            this.showloadmore()
        })
    }
}
