import React from 'react'

export default class Blank extends React.Component {
    render() {
        const blank = {
            height: '8px',
            backgroundColor: '#efeff4'
        }
        return (
            <div style={blank}>

            </div>
        )
    };
}
