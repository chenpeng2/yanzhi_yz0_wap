import React from 'react'
import PopularityModel1 from '../index_menu/popularitymodel1'
import PopularityModel2 from '../index_menu/popularitymodel2'
import LoadMore from '../index_menu/loadmore'

export default class Popularity extends React.Component {
    constructor() {
        super()
        this.state = {
            rank: '',
            arrays: [],
            isLoadingMore: '',
            page: 0,
            isLoadingMore: false,
            showloadmore: false
        }
    }

    showloadmore() {
        var _this = this
        setTimeout(function () {
            _this.setState({showloadmore: true})
        })
    }

    componentWillMount() {
        fetch('http://yanzhi.top/origin/v1/getNewRanking.do', {
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

    componentWillReceiveProps(nextProps) {
        if (nextProps.newdatas) {
            let datas = nextProps.newdatas
            this.setState({arrays: this.sliceArr(datas.data.list, 10), page: 0})
            let arrays = this.sliceArr(datas.data.list, 10)
            let length = datas.data.list.length / 10
            var _this = this
            if (length == 0) {
                this.setState({showloadmore: false})
            }
            setTimeout(function () {
                _this.setState({
                    rank: arrays[_this.state.page]
                })
            }, 100)
        }
    }

    render() {
        let data = this.state.rank
        const user = {
            all: {
                margin: '0 10px',
                position: 'relative'
            },
            marginTop: {
                marginTop: '10px'
            }
        }
        const popmodel = data ? data.map((list, i) => {
                return list.backgroundType == '1' ?
                    <div style={user.marginTop} key={i}>
                        <PopularityModel1 rank={list} key={i}/>
                    </div>
                    :
                    <div style={user.marginTop} key={i}>
                        <PopularityModel2 rank={list} key={i}/>
                    </div>
            }
        ) : ''
        return (
            <div>
                {popmodel}
                {this.state.showloadmore
                    ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ''}
            </div>
        )
    }

}
