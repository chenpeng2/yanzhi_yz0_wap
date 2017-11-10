import React from 'react'
import TopFilter from '../components/commons/top-filter'
import Search from '../components/search'
import DaoHang from '../components/fourrouter'
import Blank from '../components/commons/blank'
import ThreeRoot from '../components/index_menu'
import {Carousel} from 'antd'
import {Link} from 'react-router'

export default class Root extends React.Component {
    constructor() {
        super()
        this.state = {
            threepics: '',
            carouselpics: ''
        }
        document.title = '高颜值，不一样的社交新宠'
    }

    componentDidMount() {
        if (localStorage.getItem('hassearchdata')) {
            localStorage.setItem('hassearchdata', '')
        }
        var myFetchOptions = {
            method: 'POST'
        }
        fetch('http://yanzhi.top/vote/v2/getThreeVoteTask.do', myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({threepics: json})
            })
        // 轮播数据
        fetch('http://yanzhi.top/origin/v1/getRankingNotice.do', myFetchOptions)
            .then(response => response.json())
            .then(json => {
                this.setState({carouselpics: json})
            })
    }

    render() {
        const carousel = this.state.carouselpics
        const carousel2 = carousel.data
        var data = carousel.code == 'SUCCESS'
            ? carousel.data.noticeList
            : [
                {}
            ]
        const lunbo =
            <Carousel autoplay>
                {
                    data.map((item, index) => {
                        return <a key={index} href={item.website ? item.website : ''}>
                            <div style={{
                                height: '7.23rem',
                                background: 'url(' + item.noticePath + ') center/cover no-repeat'
                            }}/>
                        </a>
                    })
                }
            </Carousel>
        const daohangs =
            <ul class="daohangs">
                <li>
                    <Link to={`fujin`}>
                        <DaoHang title="附近" src="./src/images/fujin.svg"/>
                    </Link>
                </li>
                <li>
                    <Link to={`xiehou`}>
                        <DaoHang title="邂逅" src="./src/images/xiehou.svg"/>
                    </Link>
                </li>
                <li>
                    <Link to={`piaoxuan`}>
                        <DaoHang title="票选" src="./src/images/piaoxuan.svg"/>
                    </Link>
                </li>
                <li>
                    <a href="http://yanzhi.top/staticpage/publicReview.html">
                        <DaoHang title="活动" src="./src/images/huodong.svg"/>
                    </a>
                </li>
            </ul>
        const datas = this.state.threepics
        const morepeople = datas.data && datas.data.threeVoteList.length !== 0
            ? <div>
                <div class="piaoxuan">你的票选任务<span class="icon-gengduo"></span></div>
                <ul class="morepeople">
                    {datas.data.threeVoteList.map((newsItem, index) => (
                        <li key={index}>
                            <Link to={{pathname: '/piaoxuan/candidate', state: newsItem}}>
                                <div style={{height: '4.747rem', overflow: 'hidden'}}><img
                                    src={newsItem.headUrls + '!gdsize100'}/></div>
                            </Link>
                            <p>{newsItem.nickName}</p>
                        </li>
                    ))}
                </ul>
            </div>
            : ''
        return (
            <div>
                <TopFilter/>
                <Search/>
                {lunbo}
                {daohangs}
                {morepeople}
                <Blank/>
                <ThreeRoot/>
            </div>
        )
    };
}
