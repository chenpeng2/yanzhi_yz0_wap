import React from 'react'

export default class LoadMore extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                        ? <span>数据加载中...</span>
                        : <span onClick={this.loadMoreHandle.bind(this)}>点击加载更多</span>
                }
            </div>
        )
    }

    loadMoreHandle() {
        this.props.loadMoreFn()
    }
}
