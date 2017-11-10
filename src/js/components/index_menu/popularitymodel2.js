import React from 'react'
import PopularityModelComment from '../index_menu/popularitymodelcomment'
import Blank from '../index_menu/blank'

export default class Popularity extends React.Component {

    render() {
        const user = {
            all: {
                margin: '0.4rem 0.4rem',
                position: 'relative'
            }
        }
        const data = this.props.rank.backgroundPath
            ? <div style={user.all}>
                <img style={{width: '100%'}} src={this.props.rank.backgroundPath + '!gaoyanzhiDB'}/>
                <PopularityModelComment rank={this.props.rank} first={true} bottomSty={true}/>
            </div>
            : <div style={user.all}>
                <PopularityModelComment rank={this.props.rank} first={false} bottomSty={false}/>
            </div>
        return (
            <div>
                <Blank/>
                {data}
            </div>
        )
    };
}
