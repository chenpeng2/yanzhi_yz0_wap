import React from 'react'

export default class SearchMod2 extends React.Component {
    constructor() {
        super()
        this.state = {
            index: 0
        }
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
        this.setState({index: nextProps.state})
    }

    check(name) {
        this.props.event(name)
    }

    render() {
        const filtersmallmodel = this.props.filtertype == 'star'
            ? {
                width: '60px',
                height: '28px',
                border: '1px solid #ffb5b5',
                textAlign: 'center',
                lineHeight: '28px',
                margin: '0 15px 16px 0',
                borderRadius: '6px', float: 'left',
                color: '#ffb5b5'
            }
            :
            {
                width: '60px',
                height: '28px',
                border: '1px solid #ffb5b5',
                textAlign: 'center',
                lineHeight: '28px',
                margin: '0 15px 16px 0',
                borderRadius: '6px', float: 'left',
                color: '#ffb5b5'
            }
        const filterbg = this.props.index == this.state.index
            ? {
                backgroundColor: '#ff5151',
                border: '1px solid #ff5151',
                borderRadius: '6px',
                color: '#fff'
            }
            : {}
        return (
            <div style={{...filtersmallmodel, ...filterbg}} onClick={this.check.bind(this, this.props)}>
                {this.props.name}
            </div>
        )
    };
}
