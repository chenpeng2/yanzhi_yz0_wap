import React from 'react'
import {Link} from 'react-router'
import PopularityModelComment from '../index_menu/popularitymodelcomment'
import Blank from '../index_menu/blank'

export default class Popularity extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

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
                left: '50%',
                top: '50%',
                marginTop: '-9px',
                marginLeft: '-9px',
                color: '#fff'
            }
        }
        const videostyle = 'backgroundPath' in this.props.rank
            ? {
                width: '15.2rem',
                height: '15.2rem',
                background: 'url(' + this.props.rank.backgroundPath + '!gaoyanzhiDB) no-repeat',
                backgroundSize: 'cover'
            }
            : {
                width: '15.2rem',
                height: '15.2rem',
                backgroundColor: '#000'
            }
        const videos =
            <div style={user.all} className="model1">
                <div style={videostyle}>
                    <Link to={{pathname: '/videoplay', state: this.props.rank}}>
                        <span class="icon-bofang" style={user.bofang}></span>
                    </Link>
                </div>
                <PopularityModelComment first={true} className="model1" rank={this.props.rank} bottomSty={true}/>
            </div>
        return (
            <div>
                <Blank/>
                {videos}
            </div>
        )
    };
}
