import React from 'react'

export default class SearchToper extends React.Component {
    render() {
        const stylesize = {
            width: '45px'
        }
        return (
            <div>
                <img style={stylesize} src={this.props.src}/>
                <p>{this.props.title}</p>
            </div>
        )
    };
}
